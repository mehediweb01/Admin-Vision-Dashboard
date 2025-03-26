import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoMdStats, IoMdPerson } from "react-icons/io";
import { FaHotTub, FaPaperPlane } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import HelpCard from "./HelpCard";
import { NavLink } from "react-router-dom";

function SideSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="md:hidden text-white p-1 sm:p-3 text-2xl m-1 bg-gray-800 rounded-lg z-50"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`hidden md:inline-block w-full rounded-r-lg min-h-screen ps-1 ${
          isOpen ? "inline-block mt-6 md:mt-0" : "hidden"
        }`}
      >
        {/* Sidebar Header */}
        <h2 className="text-sm sm:text-xl md:m-4 font-bold text-white mb-5">
          Dashboard UI
        </h2>
        <div className="w-full border-b border-gray-300 my-4" />

        {/* Sidebar Menu */}
        <ul className="flex flex-col sm:items-start items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 text-green-300 font-semibold "
                : "text-white flex items-center gap-4"
            }
          >
            <div className="bg-blue-900 p-3 rounded-full my-3">
              <MdOutlineDashboardCustomize />
            </div>
            <span className="hidden sm:inline-block">Dashboard</span>
          </NavLink>

          <NavLink
            to="/tables"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 text-green-300 font-semibold "
                : "text-white flex items-center gap-4"
            }
          >
            <div className="bg-blue-900 p-2 rounded-full my-3">
              <IoMdStats />
            </div>
            <span className="hidden sm:inline-block">Tables</span>
          </NavLink>

          <NavLink
            to="/billing"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 text-green-300 font-semibold "
                : "text-white flex items-center gap-4"
            }
          >
            <div className="bg-blue-900 p-2 rounded-full my-3">
              <FaHotTub />
            </div>
            <span className="hidden sm:inline-block">Billing</span>
          </NavLink>

          <NavLink
            to="/rtl"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 text-green-300 font-semibold "
                : "text-white flex items-center gap-4"
            }
          >
            <div className="bg-blue-900 p-2 rounded-full my-3">
              <GrTechnology className="fill-white" />
            </div>
            <span className="hidden sm:inline-block">RTL</span>
          </NavLink>
        </ul>

        {/* Account Pages */}
        <h3 className="text-white py-3 text-sm sm:text-base ">Account Pages</h3>
        <ul className="flex flex-col sm:items-start items-center">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 text-green-300 font-semibold "
                : "text-white flex items-center gap-4"
            }
          >
            <div className="bg-blue-900 p-2 rounded-full my-3">
              <IoMdPerson />
            </div>
            <span className="hidden sm:inline-block">Profile</span>
          </NavLink>

          <NavLink
            to="/sign-in"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 text-green-300 font-semibold "
                : "text-white flex items-center gap-4"
            }
          >
            <div className="bg-blue-900 p-2 rounded-full my-3">
              <IoNewspaperOutline />
            </div>
            <span className="hidden sm:inline-block">Sign In</span>
          </NavLink>

          <NavLink
            to="/sign-up"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 text-green-300 font-semibold "
                : "text-white flex items-center gap-4"
            }
          >
            <div className="bg-blue-900 p-2 rounded-full">
              <FaPaperPlane />
            </div>
            <span className="hidden sm:inline-block">Sign Up</span>
          </NavLink>
        </ul>

        {/* Help Card */}
        <div className="mt-16 sm:inline-block hidden">
          <HelpCard />
        </div>
      </div>
    </>
  );
}

export default SideSection;
