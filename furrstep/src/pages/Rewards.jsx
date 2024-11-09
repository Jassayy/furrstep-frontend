import React from "react";

const Rewards = () => {
     return (
          <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               {/* Animated blobs - Responsive sizes */}
               <div className="absolute top-20 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-40 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

               <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-20 text-center">
                    <svg className="w-48 h-48 mb-8 text-gray-400 animate-bounce" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 15.713L18.01 9.70297L16.597 8.28997L12 12.888L7.40399 8.28997L5.98999 9.70297L12 15.713Z" fill="currentColor"/>
                         <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                         <path d="M2 17L12 22L22 17V7L12 12L2 7V17Z" fill="currentColor"/>
                    </svg>

                    <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">Coming Soon!</h1>
                    <p className="max-w-2xl mb-8 text-lg text-gray-600 dark:text-gray-300">
                         The rewards feature is currently in development and will be available once FurrStep is monetized. Stay tuned for exciting rewards and benefits for you and your furry friends!
                    </p>

                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                         <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">Future Rewards May Include:</h2>
                         <ul className="text-left text-gray-600 dark:text-gray-300">
                              <li className="mb-2">🦴 Premium pet accessories</li>
                              <li className="mb-2">🎯 Exclusive training resources</li>
                              <li className="mb-2">🏆 Special achievements and badges</li>
                              <li className="mb-2">🎁 Monthly surprise boxes</li>
                         </ul>
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

export default Rewards;
