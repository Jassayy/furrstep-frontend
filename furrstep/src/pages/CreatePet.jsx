import React, { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePet = () => {
     const navigate = useNavigate();
     const [petData, setPetData] = useState({
          name: "",
          age: "",
          species: "",
          breed: "",
          weight: "",
          isVaccinated: false,
     });

     const handleChange = (e) => {
          const { name, value, type, checked } = e.target;
          setPetData((prev) => ({
               ...prev,
               [name]: type === "checkbox" ? checked : value,
          }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          console.log(petData);
          try {
               const response = await axios.post(
                    `${import.meta.env.VITE_BACKEND_URL}/api/v1/pets/create-pet`,
                    petData,
                    {
                         withCredentials: true,
                    }
               );

               if (response.status === 201) {
                    navigate("/home");
               }
          } catch (error) {
               console.error("Error creating pet:", error);
          }
     };

     return (
          <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-20 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

               <div className="relative z-10 flex flex-col lg:flex-row md:flex-row justify-between max-w-6xl mx-auto mt-4 sm:mt-8 pt-12 sm:pt-20 px-4 gap-8">
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 sm:p-6 w-full md:w-[450px] mx-auto">
                         <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 text-center">
                              Add Your Pet
                         </h2>

                         <form
                              onSubmit={handleSubmit}
                              className="space-y-3 sm:space-y-4"
                         >
                              <div>
                                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Pet Name
                                   </label>
                                   <input
                                        type="text"
                                        name="name"
                                        value={petData.name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                                        required
                                   />
                              </div>

                              <div>
                                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Age (years)
                                   </label>
                                   <input
                                        type="number"
                                        name="age"
                                        value={petData.age}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                                        required
                                   />
                              </div>

                              <div>
                                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Species
                                   </label>
                                   <input
                                        type="text"
                                        name="species"
                                        value={petData.species}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                                        required
                                   />
                              </div>

                              <div>
                                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Breed
                                   </label>
                                   <input
                                        type="text"
                                        name="breed"
                                        value={petData.breed}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                                        required
                                   />
                              </div>

                              <div>
                                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Weight (kg)
                                   </label>
                                   <input
                                        type="number"
                                        name="weight"
                                        value={petData.weight}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                                        required
                                   />
                              </div>

                              <div className="flex items-center">
                                   <input
                                        type="checkbox"
                                        name="isVaccinated"
                                        checked={petData.isVaccinated}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                   />
                                   <label className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
                                        Is Vaccinated
                                   </label>
                              </div>

                              <Button type="submit" className="w-full">
                                   Add Pet
                              </Button>
                         </form>
                    </div>

                    <div className="flex items-center justify-center md:justify-start">
                         <img
                              src="https://media.tenor.com/5x4UmDjnty0AAAAi/dog-caramelldansen.gif"
                              alt="Dancing Dog"
                              className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain"
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

export default CreatePet;
