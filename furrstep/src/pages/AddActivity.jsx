import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
const AddActivity = () => {
     const { petId } = useParams();
     const navigate = useNavigate();
     const [formData, setFormData] = useState({
          title: "",
          description: "",
          type: "",
          duration: "",
          caloriesBurned: "",
     });

     const handleChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value,
          });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               await axios.post(
                    `${import.meta.env.VITE_BACKEND_URL}/api/v1/activities/create-activity/${petId}`,
                    formData,
                    { withCredentials: true }
               );
               navigate(`/track/${petId}`);
          } catch (error) {
               console.error("Error creating activity:", error);
          }
     };

     return (
          <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               <div className="absolute top-20 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-40 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

               <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-md mx-auto">
                         <img 
                              src="https://media.tenor.com/0o5BGX30hkcAAAAi/after-effects-running.gif"
                              alt="Running animation"
                              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6"
                         />
                         <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 md:p-8">
                              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                                   Add New Activity
                              </h2>

                              <form onSubmit={handleSubmit} className="space-y-4">
                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                             Title
                                        </label>
                                        <input
                                             type="text"
                                             name="title"
                                             value={formData.title}
                                             onChange={handleChange}
                                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                             required
                                        />
                                   </div>

                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                             Description
                                        </label>
                                        <textarea
                                             name="description"
                                             value={formData.description}
                                             onChange={handleChange}
                                             rows="3"
                                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                             required
                                        ></textarea>
                                   </div>

                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                             Type
                                        </label>
                                        <select
                                             name="type"
                                             value={formData.type}
                                             onChange={handleChange}
                                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                             required
                                        >
                                             <option value="">
                                                  Select activity type
                                             </option>
                                             <option value="walk">Walk</option>
                                             <option value="run">Run</option>
                                             <option value="play">Play</option>
                                             <option value="training">
                                                  Training
                                             </option>
                                        </select>
                                   </div>

                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                             Duration (minutes)
                                        </label>
                                        <input
                                             type="number"
                                             name="duration"
                                             value={formData.duration}
                                             onChange={handleChange}
                                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                             required
                                        />
                                   </div>

                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                             Calories Burned
                                        </label>
                                        <input
                                             type="number"
                                             name="caloriesBurned"
                                             value={formData.caloriesBurned}
                                             onChange={handleChange}
                                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                             required
                                        />
                                   </div>

                                   <Button type="submit" className="w-full">
                                        Add Activity
                                   </Button>
                              </form>
                         </div>
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

export default AddActivity;
