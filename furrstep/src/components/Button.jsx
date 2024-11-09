import React from "react";

const Button = ({ children, className, onClick }) => {
     return (
          <button
               onClick={onClick}
               className={`bg-teal-600 text-white px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base rounded-full hover:bg-teal-700 h-10 sm:h-12 transition-colors duration-200 font-medium shadow-md hover:shadow-lg ${
                    className || ""
               }`}
          >
               {children}
          </button>
     );
};

export default Button;
