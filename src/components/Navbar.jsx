import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";

const Navbar = () => {
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`mb-8 p-8 flex justify-between ${
        darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
      }`}
    >
      <div className="font-source-code flex gap-x-6">
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
        <CiSun className="cursor-pointer" size={20} onClick={toggleDarkMode} />
      ) : (
        <FaRegMoon
          className="cursor-pointer"
          size={20}
          onClick={toggleDarkMode}
        />
      )}
    </div>
  );
};

export default Navbar;
