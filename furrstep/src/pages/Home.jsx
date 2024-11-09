import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
     const navigate = useNavigate();
     const [username, setUsername] = useState("");
     const [pets, setPets] = useState([]);

     useEffect(() => {
          const fetchUser = async () => {
               try {
                    const response = await axios.get(
                         `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/user`,
                         {
                              withCredentials: true,
                         }
                    );
                    const name = response.data.data.username;
                    setUsername(name.charAt(0).toUpperCase() + name.slice(1));
               } catch (error) {
                    console.error("Error fetching user:", error);
               }
          };

          fetchUser();
     }, []);

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
               } catch (error) {
                    console.error("Error fetching pets:", error);
               }
          };
          getPets();
     }, []);

     const handleDelete = async (petId) => {
          try {
               await axios.delete(
                    `${import.meta.env.VITE_BACKEND_URL}/api/v1/pets/delete-pet/${petId}`,
                    {
                         withCredentials: true,
                    }
               );
               setPets(pets.filter((pet) => pet._id !== petId));
          } catch (error) {
               console.error("Error deleting pet:", error);
          }
     };

     return (
          <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               {/* Animated blobs - Responsive sizes */}
               <div className="absolute top-20 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-40 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

               <div className="fixed bottom-4 right-4 z-50">
                    <img
                         src="https://media.tenor.com/LR0dQvR_0-oAAAAi/hello-kitty-pixel-art.gif"
                         alt="Hello Kitty"
                         className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
                    />
               </div>

               <div className="relative z-10 text-center pt-10">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                         Hieee!{" "}
                         <span className="text-blue-500 dark:text-yellow-500">
                              {username}...
                         </span>
                    </h1>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-6">
                         Here are your Pets
                    </h1>
                    <Link to="/create-pet">
                         <Button className="mt-4">Add Pet +</Button>
                    </Link>

                    <div className="max-w-6xl mx-auto mt-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mb-10">
                         {pets.map((pet) => (
                              <div
                                   key={pet._id}
                                   className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700"
                              >
                                   <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                             {pet.name}
                                        </h3>
                                        <div className="flex gap-2">
                                             <Link to={`/track/${pet._id}`}>
                                                  <svg
                                                       className="w-8 h-8 text-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
                                                       fill="none"
                                                       stroke="currentColor"
                                                       viewBox="0 0 24 24"
                                                  >
                                                       <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                       />
                                                  </svg>
                                             </Link>
                                             <Link to={`/edit-pet/${pet._id}`}>
                                                  <svg
                                                       className="w-8 h-8 text-yellow-500 hover:text-yellow-600 transition-colors cursor-pointer"
                                                       fill="none"
                                                       stroke="currentColor"
                                                       viewBox="0 0 24 24"
                                                  >
                                                       <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                       />
                                                  </svg>
                                             </Link>
                                             <svg
                                                  className="w-8 h-8 text-purple-500 dark:text-purple-400"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth="2"
                                                       d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z"
                                                  />
                                             </svg>
                                             <svg
                                                  onClick={() =>
                                                       handleDelete(pet._id)
                                                  }
                                                  className="w-8 h-8 text-red-500 hover:text-red-600 transition-colors cursor-pointer"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth="2"
                                                       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                  />
                                             </svg>
                                        </div>
                                   </div>
                                   <div className="space-y-3 text-gray-600 dark:text-gray-300">
                                        <div className="flex items-center gap-2">
                                             <svg
                                                  className="w-5 h-5 text-teal-500"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth="2"
                                                       d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                  />
                                             </svg>
                                             <p>
                                                  <span className="font-semibold">
                                                       Species:
                                                  </span>{" "}
                                                  {pet.species}
                                             </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                             <svg
                                                  className="w-5 h-5 text-blue-500"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth="2"
                                                       d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                                  />
                                             </svg>
                                             <p>
                                                  <span className="font-semibold">
                                                       Breed:
                                                  </span>{" "}
                                                  {pet.breed}
                                             </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                             <svg
                                                  className="w-5 h-5 text-yellow-500"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth="2"
                                                       d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                  />
                                             </svg>
                                             <p>
                                                  <span className="font-semibold">
                                                       Age:
                                                  </span>{" "}
                                                  {pet.age} years
                                             </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                             <svg
                                                  className="w-5 h-5 text-pink-500"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth="2"
                                                       d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                                  />
                                             </svg>
                                             <p>
                                                  <span className="font-semibold">
                                                       Weight:
                                                  </span>{" "}
                                                  {pet.weight} kg
                                             </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                             <svg
                                                  className={`w-5 h-5 ${
                                                       pet.isVaccinated
                                                            ? "text-green-500"
                                                            : "text-red-500"
                                                  }`}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth="2"
                                                       d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                  />
                                             </svg>
                                             <p>
                                                  <span className="font-semibold">
                                                       Vaccination Status:
                                                  </span>{" "}
                                                  <span
                                                       className={
                                                            pet.isVaccinated
                                                                 ? "text-green-500"
                                                                 : "text-red-500"
                                                       }
                                                  >
                                                       {pet.isVaccinated
                                                            ? "Vaccinated"
                                                            : "Not Vaccinated"}
                                                  </span>
                                             </p>
                                        </div>
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

export default Home;
