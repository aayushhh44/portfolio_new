import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div
        className={`mb-8 p-6 sm:p-8 flex justify-between ${
          darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
        }`}
      >
        <div className="font-source-code hidden sm:flex gap-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm hover:text-[#d62727] hover:cursor-pointer ${
                isActive ? "text-[#d62727]" : ""
              }`
            }
          >
            HOME
          </NavLink>
          <Link
            to="/blogs"
            className="text-sm hover:text-[#d62727] hover:cursor-pointer active:text-[#d62727]"
          >
            BLOGS
          </Link>
          <NavLink
            to="/gallery"
            className="text-sm hover:text-[#d62727] hover:cursor-pointer"
          >
            GALLERY
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `text-sm hover:text-[#d62727] hover:cursor-pointer ${
                isActive ? "text-[#d62727]" : ""
              }`
            }
          >
            ABOUT & CONTACTS
          </NavLink>
        </div>
        {darkMode ? (
          <CiSun
            className="cursor-pointer hidden sm:block"
            size={20}
            onClick={toggleDarkMode}
          />
        ) : (
          <FaRegMoon
            className="cursor-pointer hidden sm:block"
            size={20}
            onClick={toggleDarkMode}
          />
        )}

        {darkMode ? (
          <CiSun
            className="cursor-pointer absolute right-4 top-4  sm:hidden "
            size={25}
            onClick={toggleDarkMode}
          />
        ) : (
          <FaRegMoon
            className="cursor-pointer sm:hidden absolute right-4 top-5"
            size={25}
            onClick={toggleDarkMode}
          />
        )}

        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />

   
      
      </div>
      <div
          className={`${
            isOpen
              ? "transform relative translate-x-0 opacity-100 visibility-visible transition-all duration-300"
              : "transform -translate-x-full opacity-0 visibility-hidden transition-all duration-300"
          } font-source-code mt-5 flex flex-col gap-4 items-center justify-center  h-screen -top-8 left-0 sm:hidden w-3/4 gap-y-6 text-white bg-black z-50 absolute`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#d62727] text-2xl text-center hover:cursor-pointer ${
                isActive ? "text-[#d62727]" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            HOME
          </NavLink>
          <Link
            to="/blogs"
            className="text-2xl text-center hover:text-[#d62727] hover:cursor-pointer active:text-[#d62727]"
            onClick={() => setIsOpen(false)}
          >
            BLOGS
          </Link>
          <NavLink
            to="/gallery"
            className="text-2xl text-center hover:text-[#d62727] hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            GALLERY
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `text-2xl hover:text-[#d62727] text-center hover:cursor-pointer ${
                isActive ? "text-[#d62727]" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            ABOUT & CONTACTS
          </NavLink>
        </div>
    </div>
  );
};

export default Navbar;
