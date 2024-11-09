import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
     const navigate = useNavigate();
     return (
          <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               {/* Animated blobs - Responsive sizes */}
               <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-20 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

               {/* Main content */}
               <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-24">
                    <div className="text-center mb-12 sm:mb-20">
                         <div className="inline-block animate-bounce mb-6">
                              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 rounded-full text-sm font-semibold">
                                   🐾 New Features Available!
                              </span>
                         </div>
                         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-purple-600">
                              FurrStep: Care for Your Senior Pets
                         </h1>
                         <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 px-4">
                              Track, monitor, and enhance the well-being of your
                              beloved aging companions
                         </p>
                         <div className="flex justify-center gap-4">
                              <Button
                                   onClick={() => navigate("/signup")}
                                   className={
                                        "h-12 sm:h-16 text-lg sm:text-xl w-36 sm:w-44 transform hover:scale-105 transition-transform"
                                   }
                              >
                                   Get Started
                              </Button>
                              <Button
                                   className={
                                        "h-12 sm:h-16 text-lg sm:text-xl w-36 sm:w-44 bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-transform"
                                   }
                              >
                                   Watch Demo
                              </Button>
                         </div>
                    </div>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 px-4">
                         <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                              <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                   <svg
                                        className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth={2}
                                             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth={2}
                                             d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                   </svg>
                              </div>
                              <h3 className="text-lg sm:text-xl font-semibold mb-3 dark:text-gray-100 transition-colors duration-500">
                                   Activity Tracking
                              </h3>
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-500">
                                   Monitor daily movement and rest patterns
                              </p>
                              <div className="mt-4 flex items-center text-teal-600 hover:text-teal-700 cursor-pointer transition-all duration-500">
                                   <span className="text-sm">Learn more</span>
                                   <svg
                                        className="w-4 h-4 ml-1 transition-transform duration-500 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth={2}
                                             d="M9 5l7 7-7 7"
                                        />
                                   </svg>
                              </div>
                         </div>
                         <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                   <svg
                                        className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth={2}
                                             d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                        />
                                   </svg>
                              </div>
                              <h3 className="text-lg sm:text-xl font-semibold mb-3 dark:text-gray-100">
                                   Health Insights
                              </h3>
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                   Get personalized health recommendations
                              </p>
                              <div className="mt-4 flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                                   <span className="text-sm">Learn more</span>
                                   <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth={2}
                                             d="M9 5l7 7-7 7"
                                        />
                                   </svg>
                              </div>
                         </div>
                         <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                              <div className="bg-pink-100 dark:bg-pink-900/30 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                   <svg
                                        className="w-10 h-10 sm:w-12 sm:h-12 text-pink-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth={2}
                                             d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                   </svg>
                              </div>
                              <h3 className="text-lg sm:text-xl font-semibold mb-3 dark:text-gray-100">
                                   Medication Reminders
                              </h3>
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                   Never miss important medications
                              </p>
                              <div className="mt-4 flex items-center text-pink-600 hover:text-pink-700 cursor-pointer">
                                   <span className="text-sm">Learn more</span>
                                   <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth={2}
                                             d="M9 5l7 7-7 7"
                                        />
                                   </svg>
                              </div>
                         </div>
                    </div>

                    {/* Testimonials */}
                    <div className="text-center mb-12 px-4">
                         <div className="inline-block mb-8">
                              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-semibold">
                                   💝 Trusted by Pet Parents
                              </span>
                         </div>
                         <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 sm:mb-12">
                              What Pet Parents Say
                         </h2>
                         <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                              <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                   <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                                             <span className="text-2xl">
                                                  🐕
                                             </span>
                                        </div>
                                   </div>
                                   <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                                        "FurrStep has been a game-changer for
                                        managing my 12-year-old Golden
                                        Retriever's health. The activity
                                        tracking helps me ensure he's getting
                                        the right amount of exercise."
                                   </p>
                                   <p className="font-semibold text-sm sm:text-base dark:text-gray-100">
                                        - Sarah M.
                                   </p>
                              </div>
                              <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                   <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                                             <span className="text-2xl">
                                                  🐱
                                             </span>
                                        </div>
                                   </div>
                                   <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                                        "As my cat entered her senior years, I
                                        was worried about keeping track of her
                                        health. This app makes it so much easier
                                        to monitor her well-being."
                                   </p>
                                   <p className="font-semibold text-sm sm:text-base dark:text-gray-100">
                                        - Michael R.
                                   </p>
                              </div>
                         </div>
                    </div>

                    {/* Stats Section */}
                    <div className="text-center mb-20">
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                                   <h3 className="text-4xl font-bold text-teal-600 mb-2">
                                        10k+
                                   </h3>
                                   <p className="text-gray-600 dark:text-gray-300">
                                        Happy Pets
                                   </p>
                              </div>
                              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                                   <h3 className="text-4xl font-bold text-purple-600 mb-2">
                                        98%
                                   </h3>
                                   <p className="text-gray-600 dark:text-gray-300">
                                        Satisfaction Rate
                                   </p>
                              </div>
                              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                                   <h3 className="text-4xl font-bold text-pink-600 mb-2">
                                        24/7
                                   </h3>
                                   <p className="text-gray-600 dark:text-gray-300">
                                        Support
                                   </p>
                              </div>
                              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                                   <h3 className="text-4xl font-bold text-blue-600 mb-2">
                                        50+
                                   </h3>
                                   <p className="text-gray-600 dark:text-gray-300">
                                        Expert Vets
                                   </p>
                              </div>
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

export default Landing;
