import React from "react";

const About = () => {
     return (
          <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               {/* Animated blobs - Responsive sizes */}
               <div className="absolute top-20 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-40 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

               <div className="container mt-28 px-10 relative z-10 ">
                    <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
                         <div className="md:w-1/2">
                              <img
                                   src="https://www.wallpaperbetter.com/wallpaper/257/632/947/playful-dog-2K-wallpaper.jpg"
                                   alt="Playful dog"
                                   className="rounded-lg shadow-xl w-full h-full object-cover"
                              />
                         </div>
                         <div className="md:w-1/2 text-gray-800 dark:text-gray-200 ">
                              <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                                   About{" "}
                                   <span className="text-blue-500 dark:text-yellow-500">
                                        FurrStep
                                   </span>
                              </h1>
                              <div className="space-y-3 md:space-y-4">
                                   <p className="text-base md:text-lg font-mono font-semibold">
                                        Hi, I'm Jas! As a passionate animal
                                        lover, I created FurrStep with a clear
                                        mission in mind: to enhance and protect
                                        the health of our beloved pets at every
                                        stage of their lives.
                                   </p>
                                   <p className="text-base md:text-lg font-mono font-semibold">
                                        My primary focus is on improving the
                                        quality of life for middle-aged and
                                        senior pets, who often need extra care
                                        and attention. I understand that these
                                        faithful companions face unique
                                        challenges as they age, and I'm here to
                                        help them stay healthy and happy.
                                   </p>
                                   <p className="text-base md:text-lg font-mono font-semibold">
                                        But I haven't forgotten about the
                                        younger pets! I believe in establishing
                                        good health habits early on, setting the
                                        foundation for a long and vibrant life.
                                        Through FurrStep, we provide
                                        comprehensive support and guidance for
                                        pet owners at every step of their
                                        journey.
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

export default About;
