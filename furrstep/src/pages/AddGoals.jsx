import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AddGoals = () => {
     const { petId } = useParams();
     const navigate = useNavigate();
     const [formData, setFormData] = useState({
          title: "",
          weightToAchieve: "",
          caloriesToBeBurned: "",
          targetDate: "",
          status: "active",
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
                    `${import.meta.env.VITE_BACKEND_URL}/api/v1/goals/create-goal/${petId}`,
                    formData,
                    { withCredentials: true }
               );
               navigate("/goals");
          } catch (error) {
               console.error("Error creating goal:", error);
          }
     };

     return (
          <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               {/* Animated blobs - Responsive sizes */}
               <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-20 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

               <div className="relative z-10 container mx-auto px-4 pt-20">
                    <div className="max-w-md mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-xl p-8">
                         <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                              Add New Goal
                         </h2>

                         <form onSubmit={handleSubmit} className="space-y-6">
                              <div>
                                   <label className="block text-gray-700 dark:text-gray-200 mb-2">
                                        Goal Title
                                   </label>
                                   <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                                        required
                                   />
                              </div>

                              <div>
                                   <label className="block text-gray-700 dark:text-gray-200 mb-2">
                                        Target Weight (kg)
                                   </label>
                                   <input
                                        type="number"
                                        name="weightToAchieve"
                                        value={formData.weightToAchieve}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                                        required
                                   />
                              </div>

                              <div>
                                   <label className="block text-gray-700 dark:text-gray-200 mb-2">
                                        Calories to Burn
                                   </label>
                                   <input
                                        type="number"
                                        name="caloriesToBeBurned"
                                        value={formData.caloriesToBeBurned}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                                        required
                                   />
                              </div>

                              <div>
                                   <label className="block text-gray-700 dark:text-gray-200 mb-2">
                                        Target Date
                                   </label>
                                   <input
                                        type="text"
                                        name="targetDate"
                                        value={formData.targetDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                                        required
                                   />
                              </div>

                              <div>
                                   <label className="block text-gray-700 dark:text-gray-200 mb-2">
                                        Status
                                   </label>
                                   <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                                        required
                                   >
                                        <option value="active">Active</option>
                                        <option value="completed">Completed</option>
                                        <option value="failed">Failed</option>
                                   </select>
                              </div>

                              <button
                                   type="submit"
                                   className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 
                                   text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                                   transition-all duration-200"
                              >
                                   Create Goal
                              </button>
                         </form>
                    </div>
                    <div className="fixed bottom-4 right-4">
                         <img
                              src="https://media.tenor.com/wxCV3Z_gbkkAAAAi/pusheen-cute-cat.gif"
                              alt="Cute Cat Animation"
                              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
                         />
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

export default AddGoals;
