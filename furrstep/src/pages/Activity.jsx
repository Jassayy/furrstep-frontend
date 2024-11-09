import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Activity = () => {
     const navigate = useNavigate();
     const { petId } = useParams();
     const [pet, setPet] = useState(null);
     const [activities, setActivities] = useState([]);
     const [chartWidth, setChartWidth] = useState(window.innerWidth);

     useEffect(() => {
          const handleResize = () => {
               setChartWidth(window.innerWidth);
          };

          window.addEventListener('resize', handleResize);

          return () => {
               window.removeEventListener('resize', handleResize);
          };
     }, []);

     useEffect(() => {
          const fetchPet = async () => {
               try {
                    const response = await axios.get(
                         `${import.meta.env.VITE_BACKEND_URL}/api/v1/pets/${petId}`,
                         {
                              withCredentials: true,
                         }
                    );
                    setPet(response.data.data);
               } catch (error) {
                    console.error("Error fetching pet:", error);
               }
          };

          const fetchActivities = async () => {
               try {
                    const response = await axios.get(
                         `${import.meta.env.VITE_BACKEND_URL}/api/v1/activities/get-all-activities/${petId}`,
                         {
                              withCredentials: true,
                         }
                    );
                    setActivities(response.data.data);
               } catch (error) {
                    console.error("Error fetching activities:", error);
               }
          };

          if (petId) {
               fetchPet();
               fetchActivities();
          }
     }, [petId]);

     const handleDeleteActivity = async (activityId) => {
          try {
               await axios.delete(
                    `${import.meta.env.VITE_BACKEND_URL}/api/v1/activities/delete-activity/${activityId}`,
                    {
                         withCredentials: true,
                    }
               );
               setActivities(activities.filter(activity => activity._id !== activityId));
          } catch (error) {
               console.error("Error deleting activity:", error);
          }
     };

     const activityIcons = {
          walk: (
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
               </svg>
          ),
          run: (
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
               </svg>
          ),
          play: (
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
               </svg>
          ),
          training: (
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1zm-3-5H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z" />
               </svg>
          ),
     };

     const prepareChartData = () => {
          const labels = activities.map(activity => activity.title);
          return {
               labels,
               datasets: [
                    {
                         label: 'Calories Burned',
                         data: activities.map(activity => activity.caloriesBurned),
                         backgroundColor: 'rgba(255, 99, 132, 0.5)',
                         borderColor: 'rgb(255, 99, 132)',
                         borderWidth: 1,
                    },
                    {
                         label: 'Duration (minutes)',
                         data: activities.map(activity => activity.duration),
                         backgroundColor: 'rgba(53, 162, 235, 0.5)',
                         borderColor: 'rgb(53, 162, 235)',
                         borderWidth: 1,
                    },
               ],
          };
     };

     const chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
               legend: {
                    position: 'top',
                    labels: {
                         boxWidth: chartWidth < 600 ? 10 : 40,
                         font: {
                              size: chartWidth < 600 ? 10 : 12
                         }
                    }
               },
               title: {
                    display: true,
                    text: 'Activity Statistics',
                    color: 'gray',
                    font: {
                         size: chartWidth < 600 ? 14 : 16
                    }
               },
          },
          scales: {
               y: {
                    beginAtZero: true,
                    grid: {
                         color: 'rgba(0, 0, 0, 0.1)',
                    },
                    ticks: {
                         color: 'gray',
                         font: {
                              size: chartWidth < 600 ? 10 : 12
                         }
                    },
               },
               x: {
                    grid: {
                         color: 'rgba(0, 0, 0, 0.1)',
                    },
                    ticks: {
                         color: 'gray',
                         font: {
                              size: chartWidth < 600 ? 10 : 12
                         },
                         maxRotation: 45,
                         minRotation: 45
                    },
               },
          },
     };

     return (
          <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               <div className="absolute top-20 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-40 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

               <div className="fixed bottom-4 right-4 z-50">
                    <img
                         src="https://media.tenor.com/j9lxX7yX_XMAAAAi/dog.gif"
                         alt="Dancing Dog"
                         className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
                    />
               </div>

               {pet && (
                    <div className="relative z-10 container mx-auto mt-10 px-4 flex flex-col items-center">
                         <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-8 max-w-2xl w-full">
                              <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                                   {pet.name}'s Activity
                              </h1>

                              <div className="flex justify-center mb-8">
                                   <Button
                                        onClick={() =>
                                             navigate(`/add-activity/${petId}`)
                                        }
                                        icon={
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-6 w-6"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth={2}
                                                       d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                  />
                                             </svg>
                                        }
                                   >
                                        Add New Activity
                                   </Button>
                              </div>

                              {activities.length > 0 && (
                                   <div className="mb-8 p-4 bg-white dark:bg-slate-700 rounded-lg shadow" style={{ height: '400px' }}>
                                        <Bar options={chartOptions} data={prepareChartData()} />
                                   </div>
                              )}

                              <div className="space-y-4">
                                   {activities.map((activity, index) => (
                                        <div
                                             key={activity._id}
                                             className={`p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-102 ${
                                                  index % 4 === 0
                                                       ? "bg-purple-100 dark:bg-purple-900"
                                                       : index % 4 === 1
                                                       ? "bg-blue-100 dark:bg-blue-900"
                                                       : index % 4 === 2
                                                       ? "bg-pink-100 dark:bg-pink-900"
                                                       : "bg-teal-100 dark:bg-teal-900"
                                             }`}
                                        >
                                             <div className="flex items-center space-x-4">
                                                  <div
                                                       className={`p-3 rounded-full ${
                                                            index % 4 === 0
                                                                 ? "bg-purple-200 text-purple-600 dark:bg-purple-800 dark:text-purple-200"
                                                                 : index % 4 === 1
                                                                 ? "bg-blue-200 text-blue-600 dark:bg-blue-800 dark:text-blue-200"
                                                                 : index % 4 === 2
                                                                 ? "bg-pink-200 text-pink-600 dark:bg-pink-800 dark:text-pink-200"
                                                                 : "bg-teal-200 text-teal-600 dark:bg-teal-800 dark:text-teal-200"
                                                       }`}
                                                  >
                                                       {activityIcons[activity.type]}
                                                  </div>
                                                  <div className="flex-1">
                                                       <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                                            {activity.title}
                                                       </h3>
                                                       <p className="text-gray-600 dark:text-gray-300">
                                                            {activity.description}
                                                       </p>
                                                       <div className="mt-2 flex flex-wrap gap-2">
                                                            <span className="px-3 py-1 text-sm rounded-full bg-white/50 dark:bg-black/20">
                                                                 {activity.duration} minutes
                                                            </span>
                                                            <span className="px-3 py-1 text-sm rounded-full bg-white/50 dark:bg-black/20">
                                                                 {activity.caloriesBurned} calories
                                                            </span>
                                                       </div>
                                                  </div>
                                                  <button
                                                       onClick={() => handleDeleteActivity(activity._id)}
                                                       className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                                                  >
                                                       <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                       >
                                                            <path
                                                                 strokeLinecap="round"
                                                                 strokeLinejoin="round"
                                                                 strokeWidth={2}
                                                                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                            />
                                                       </svg>
                                                  </button>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               )}

               <style jsx>{`
                    @keyframes blob {
                         0% {
                              transform: translate(0px, 0px) scale(1);
                         }
                         33% {
                              transform: translate(30px, -50px) scale(1.1);
                         }
                         66% {
                              transform: translate(-20px, 20px) scale(0.9);
                         }
                         100% {
                              transform: translate(0px, 0px) scale(1);
                         }
                    }
                    .animate-blob {
                         animation: blob 7s infinite;
                    }
                    .animation-delay-4000 {
                         animation-delay: 4s;
                    }
               `}</style>
          </div>
     );
};

export default Activity;
