import React, { useState, useEffect } from "react";
import Button from "./Button";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
     const navigate = useNavigate();
     const [darkMode, setDarkMode] = useState(false);
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     useEffect(() => {
          if (darkMode) {
               document.documentElement.classList.add("dark");
          } else {
               document.documentElement.classList.remove("dark");
          }
     }, [darkMode]);

     useEffect(() => {
          const checkAuth = async () => {
               try {
                    const response = await axios.get(
                         `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/check-auth`,
                         {
                              withCredentials: true,
                         }
                    );
                    if (response.data.success) {
                         setIsAuthenticated(true);
                    }
               } catch (error) {
                    console.error("Auth check error:", error);
                    setIsAuthenticated(false);
               }
          };

          checkAuth();
     }, [setIsAuthenticated]);

     const handleLogout = async () => {
          try {
               await axios.post(
                    `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/logout`,
                    {},
                    {
                         withCredentials: true,
                    }
               );
               setIsAuthenticated(false);
               navigate("/");
          } catch (error) {
               console.error("Logout error:", error);
          }
     };

     return (
          <div className="fixed w-full top-0 z-50">
               <nav className="flex justify-between items-center px-4 sm:px-10 h-16 sm:h-20 bg-white/70 dark:bg-slate-900 backdrop-blur-sm shadow-xl">
                    <div
                         className="text-2xl font-bold text-purple-600 cursor-pointer"
                         onClick={() => {
                              if (isAuthenticated) {
                                   navigate("/home");
                              } else {
                                   navigate("/");
                              }
                         }}
                    >
                         <Logo />
                    </div>

                    {/* Mobile menu button - Only show when authenticated */}
                    {isAuthenticated && (
                         <button
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 md:hidden"
                         >
                              {isMenuOpen ? (
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 dark:text-white"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             d="M6 18L18 6M6 6l12 12"
                                        />
                                   </svg>
                              ) : (
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 dark:text-white"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                   </svg>
                              )}
                         </button>
                    )}

                    {/* Desktop Navigation - Only show when authenticated */}
                    {isAuthenticated && (
                         <div className="hidden md:flex flex-1">
                              <ul className="flex justify-evenly items-center gap-12 w-full">
                                   <li>
                                        <Link
                                             to="/home"
                                             className="text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors"
                                        >
                                             Home
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             to="/about"
                                             className="text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors"
                                        >
                                             About
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             to="/goals"
                                             className="text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors"
                                        >
                                             Goals
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             to="/rewards"
                                             className="text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors"
                                        >
                                             Rewards
                                        </Link>
                                   </li>
                              </ul>
                         </div>
                    )}

                    <div className="hidden md:flex items-center gap-4">
                         <button
                              onClick={() => setDarkMode(!darkMode)}
                              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                         >
                              {darkMode ? (
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                        />
                                   </svg>
                              ) : (
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-slate-700"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                        />
                                   </svg>
                              )}
                         </button>
                         {isAuthenticated ? (
                              <Button onClick={handleLogout}>Logout</Button>
                         ) : (
                              <>
                                   <Button onClick={() => navigate("/signup")}>
                                        Sign Up
                                   </Button>
                                   <Button onClick={() => navigate("/login")}>
                                        Login
                                   </Button>
                              </>
                         )}
                    </div>
               </nav>

               {/* Mobile Navigation - Only show when authenticated */}
               {isAuthenticated && (
                    <div
                         className={`md:hidden ${
                              isMenuOpen ? "block" : "hidden"
                         } bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm`}
                    >
                         <ul className="flex flex-col items-center py-4 space-y-4">
                              <li>
                                   <Link
                                        to="/home"
                                        className="text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors cursor-pointer"
                                   >
                                        Home
                                   </Link>
                              </li>
                              <li>
                                   <Link
                                        to="/about"
                                        className="text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors cursor-pointer"
                                   >
                                        About
                                   </Link>
                              </li>
                              <li>
                                   <Link
                                        to="/goals"
                                        className="text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors cursor-pointer"
                                   >
                                        Goals
                                   </Link>
                              </li>
                              <li>
                                   <Link
                                        to="/rewards"
                                        className="text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors cursor-pointer"
                                   >
                                        Rewards
                                   </Link>
                              </li>
                              <div className="flex items-center gap-4 pt-2">
                                   <button
                                        onClick={() => setDarkMode(!darkMode)}
                                        className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                                   >
                                        {darkMode ? (
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  strokeWidth={1.5}
                                                  stroke="currentColor"
                                                  className="w-6 h-6 text-yellow-500"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                                  />
                                             </svg>
                                        ) : (
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  strokeWidth={1.5}
                                                  stroke="currentColor"
                                                  className="w-6 h-6 text-slate-700"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                                  />
                                             </svg>
                                        )}
                                   </button>
                                   <Button onClick={handleLogout}>
                                        Logout
                                   </Button>
                              </div>
                         </ul>
                    </div>
               )}
          </div>
     );
};

export default Navbar;
