import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Goals = () => {
     const navigate = useNavigate();
     const [pets, setPets] = useState([]);
     const [petGoals, setPetGoals] = useState({});
     const [petActivities, setPetActivities] = useState({});

     useEffect(() => {
          const getPets = async () => {
               try {
                    const response = await axios.get(
                         `${import.meta.env.VITE_BACKEND_URL}/api/v1/pets/get-all-pets`,
                         {
                              withCredentials: true,
                         }
                    );
                    setPets(response.data.data);

                    // Fetch goals and activities for each pet
                    const fetchPromises = response.data.data.map(
                         async (pet) => {
                              const [goalsResponse, activitiesResponse] =
                                   await Promise.all([
                                        axios.get(
                                             `${import.meta.env.VITE_BACKEND_URL}/api/v1/goals/all-goals/${pet._id}`,
                                             { withCredentials: true }
                                        ),
                                        axios.get(
                                             `${import.meta.env.VITE_BACKEND_URL}/api/v1/activities/get-all-activities/${pet._id}`,
                                             { withCredentials: true }
                                        ),
                                   ]);

                              return {
                                   petId: pet._id,
                                   goals: goalsResponse.data.data,
                                   activities: activitiesResponse.data.data,
                              };
                         }
                    );

                    const results = await Promise.all(fetchPromises);

                    const goalsMap = {};
                    const activitiesMap = {};

                    results.forEach(({ petId, goals, activities }) => {
                         goalsMap[petId] = goals;
                         // Calculate total calories burned for each pet
                         const totalCaloriesBurned = activities.reduce(
                              (sum, activity) => sum + activity.caloriesBurned,
                              0
                         );
                         activitiesMap[petId] = totalCaloriesBurned;
                    });

                    setPetGoals(goalsMap);
                    setPetActivities(activitiesMap);
               } catch (error) {
                    console.error("Error fetching data:", error);
               }
          };
          getPets();
     }, []);

     const handleStatusChange = async (goalId, currentStatus) => {
          try {
               const newStatus =
                    currentStatus === "active" ? "completed" : "active";
               const response = await axios.patch(
                    `${import.meta.env.VITE_BACKEND_URL}/api/v1/goals/update-status/${goalId}`,
                    { status: newStatus },
                    { withCredentials: true }
               );

               // Update local state
               setPetGoals((prevGoals) => {
                    const newGoals = { ...prevGoals };
                    Object.keys(newGoals).forEach((petId) => {
                         newGoals[petId] = newGoals[petId].map((goal) =>
                              goal._id === goalId
                                   ? { ...goal, status: newStatus }
                                   : goal
                         );
                    });
                    return newGoals;
               });
          } catch (error) {
               console.error("Error updating goal status:", error);
          }
     };

     const handleDeleteGoal = async (goalId, petId) => {
          try {
               await axios.delete(
                    `${import.meta.env.VITE_BACKEND_URL}/api/v1/goals/delete-goal/${goalId}`,
                    { withCredentials: true }
               );

               // Update local state
               setPetGoals((prevGoals) => {
                    const newGoals = { ...prevGoals };
                    newGoals[petId] = newGoals[petId].filter(
                         (goal) => goal._id !== goalId
                    );
                    return newGoals;
               });
          } catch (error) {
               console.error("Error deleting goal:", error);
          }
     };

     // Check and update goal status when calories target is met
     useEffect(() => {
          Object.keys(petGoals).forEach((petId) => {
               petGoals[petId].forEach((goal) => {
                    const caloriesBurned = petActivities[petId] || 0;
                    if (caloriesBurned >= goal.caloriesToBeBurned) {
                         handleStatusChange(goal._id, "active");
                    } else if (goal.status === "completed") {
                         handleStatusChange(goal._id, "completed");
                    }
               });
          });
     }, [petActivities]);

     return (
          <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               <div className="absolute top-20 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-40 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
               <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-center mb-8">
                         <img 
                              src="https://media.tenor.com/DZKcXvpu-d8AAAAj/bongo-cat-cute-png.gif" 
                              alt="Bongo Cat"
                              className="w-24 h-24"
                         />
                    </div>
                    <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                         Pet Goals
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-28">
                         {pets.map((pet) => (
                              <div
                                   key={pet._id}
                                   className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                              >
                                   <div className="p-5">
                                        <div className="flex items-center space-x-4">
                                             <div className="flex-shrink-0">
                                                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                                                       <svg
                                                            className="w-10 h-10 text-purple-500 dark:text-purple-300"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                       >
                                                            <path d="M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.5,7.67 10.85,9.25 9.67,9.43C8.5,9.61 7.24,8.32 6.87,6.54C6.51,4.77 7.17,3.19 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3,7.6C4.14,7.11 5.69,8 6.5,9.55C7.31,11.13 7.3,12.8 6.14,13.28C5,13.76 3.44,12.89 2.63,11.31C1.82,9.73 1.85,8.06 3,7.6M21,7.6C22.15,8.06 22.18,9.73 21.37,11.31C20.56,12.89 19,13.76 17.85,13.28C16.7,12.8 16.69,11.13 17.5,9.55C18.31,8 19.86,7.11 21,7.6M19.33,18.38C19.37,19.32 18.65,20.36 17.79,20.75C16,21.57 13.88,19.87 11.89,19.87C9.9,19.87 7.76,21.64 6,20.75C5,20.26 4.31,18.96 4.44,17.88C4.62,16.39 6.41,15.59 7.47,14.5C8.88,13.09 9.88,10.44 11.89,10.44C13.89,10.44 14.95,13.05 16.3,14.5C17.41,15.72 19.26,16.75 19.33,18.38Z" />
                                                       </svg>
                                                  </div>
                                             </div>
                                             <div>
                                                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                                       {pet.name}
                                                  </h3>
                                             </div>
                                        </div>

                                        <div className="mt-6 space-y-4">
                                             {petGoals[pet._id] &&
                                             petGoals[pet._id].length > 0 ? (
                                                  <div className="space-y-3">
                                                       {petGoals[pet._id].map(
                                                            (goal) => (
                                                                 <div
                                                                      key={
                                                                           goal._id
                                                                      }
                                                                      className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                                                                 >
                                                                      <div className="flex justify-between items-start">
                                                                           <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                                                                                {
                                                                                     goal.title
                                                                                }
                                                                           </h4>
                                                                           <button
                                                                                onClick={() =>
                                                                                     handleDeleteGoal(
                                                                                          goal._id,
                                                                                          pet._id
                                                                                     )
                                                                                }
                                                                                className="text-red-500 hover:text-red-700"
                                                                           >
                                                                                <svg
                                                                                     className="w-5 h-5"
                                                                                     viewBox="0 0 24 24"
                                                                                     fill="currentColor"
                                                                                >
                                                                                     <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                                                                                </svg>
                                                                           </button>
                                                                      </div>

                                                                      <p className="text-sm text-gray-600 dark:text-gray-300">
                                                                           Target
                                                                           Weight:{" "}
                                                                           {
                                                                                goal.weightToAchieve
                                                                           }
                                                                           kg
                                                                      </p>

                                                                      <div className="mt-2">
                                                                           <div className="flex justify-between text-sm mb-1">
                                                                                <span className="text-gray-600 dark:text-gray-300">
                                                                                     Calories
                                                                                     Progress
                                                                                </span>
                                                                                <span className="text-purple-600 dark:text-purple-400">
                                                                                     {petActivities[
                                                                                          pet
                                                                                               ._id
                                                                                     ] ||
                                                                                          0}

                                                                                     /
                                                                                     {
                                                                                          goal.caloriesToBeBurned
                                                                                     }
                                                                                </span>
                                                                           </div>
                                                                           <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                                                                                <div
                                                                                     className="h-full bg-purple-500 rounded-full transition-all duration-300"
                                                                                     style={{
                                                                                          width: `${Math.min(
                                                                                               ((petActivities[
                                                                                                    pet
                                                                                                         ._id
                                                                                               ] ||
                                                                                                    0) /
                                                                                                    goal.caloriesToBeBurned) *
                                                                                                    100,
                                                                                               100
                                                                                          )}%`,
                                                                                     }}
                                                                                ></div>
                                                                           </div>
                                                                      </div>

                                                                      <div className="flex justify-between items-center mt-2">
                                                                           <span className="text-sm text-gray-600 dark:text-gray-300">
                                                                                Status:
                                                                           </span>
                                                                           <button
                                                                                onClick={() =>
                                                                                     handleStatusChange(
                                                                                          goal._id,
                                                                                          goal.status
                                                                                     )
                                                                                }
                                                                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                                                     (petActivities[
                                                                                          pet
                                                                                               ._id
                                                                                     ] ||
                                                                                          0) >=
                                                                                     goal.caloriesToBeBurned
                                                                                          ? "bg-green-500 text-white"
                                                                                          : "bg-yellow-500 text-white"
                                                                                }`}
                                                                           >
                                                                                {(petActivities[
                                                                                     pet
                                                                                          ._id
                                                                                ] ||
                                                                                     0) >=
                                                                                goal.caloriesToBeBurned
                                                                                     ? "completed"
                                                                                     : "active"}
                                                                           </button>
                                                                      </div>
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                             ) : (
                                                  <p className="text-gray-500 dark:text-gray-400 text-center italic">
                                                       No goals set yet
                                                  </p>
                                             )}
                                        </div>

                                        <Button
                                             onClick={() =>
                                                  navigate(
                                                       `/add-goals/${pet._id}`
                                                  )
                                             }
                                             className="w-full mt-4 py-2  hover:bg-teal-700 text-white  transition-colors duration-200"
                                        >
                                             Set Goals
                                        </Button>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
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

export default Goals;
