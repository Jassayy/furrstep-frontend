import React from "react";

const Logo = () => {
     return (
          <div className="flex items-center gap-2">
               <svg
                    width="50"
                    height="50"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
               >
                    {/* Base head shape */}
                    <circle cx="50" cy="50" r="45" fill="#D4A017" />

                    {/* Ears */}
                    <path
                         d="M 15 35 C 5 15 35 5 40 25"
                         fill="#B8860B"
                         stroke="#B8860B"
                         strokeWidth="2"
                    />
                    <path
                         d="M 85 35 C 95 15 65 5 60 25"
                         fill="#B8860B"
                         stroke="#B8860B"
                         strokeWidth="2"
                    />

                    {/* Eyes */}
                    <ellipse cx="35" cy="45" rx="6" ry="7" fill="white" />
                    <ellipse cx="65" cy="45" rx="6" ry="7" fill="white" />
                    <circle cx="35" cy="46" r="3" fill="#1A202C" />
                    <circle cx="65" cy="46" r="3" fill="#1A202C" />

                    {/* Snout */}
                    <ellipse cx="50" cy="60" rx="15" ry="12" fill="#B8860B" />

                    {/* Nose */}
                    <ellipse cx="50" cy="57" rx="7" ry="5" fill="#1A202C" />

                    {/* Mouth and Tongue */}
                    <path
                         d="M 40 65 Q 50 70 60 65"
                         stroke="#1A202C"
                         strokeWidth="2"
                         fill="none"
                    />
                    <path
                         d="M 48 65 Q 50 70 52 65"
                         fill="#FF0000"
                         stroke="#FF0000"
                         strokeWidth="1"
                    />

                    {/* Whisker spots */}
                    <circle
                         cx="30"
                         cy="60"
                         r="3"
                         fill="#B8860B"
                         opacity="0.8"
                    />
                    <circle
                         cx="70"
                         cy="60"
                         r="3"
                         fill="#B8860B"
                         opacity="0.8"
                    />
               </svg>
               <span className="text-3xl font-bold dark:text-white text-blue-500">
                    STEP
               </span>
          </div>
     );
};

export default Logo;
