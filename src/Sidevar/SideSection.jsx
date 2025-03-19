import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoMdStats, IoMdPerson } from "react-icons/io";
import { FaHotTub, FaPaperPlane } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import HelpCard from "./HelpCard";

function SideSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="md:hidden text-white p-3 text-2xl fixed top-5 left-5 bg-gray-800 rounded-lg z-50"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 bg-gradient-to-r from-blue-700 to-[#08264428] w-[260px] rounded-r-lg min-h-screen p-4`}
      >
        {/* Sidebar Header */}
        <h2 className="text-xl font-bold text-gray-400 mb-5">Dashboard UI</h2>
        <div className="border-b border-gray-300 my-4"></div>

        {/* Sidebar Menu */}
        <ul>
          <li className="flex items-center gap-3">
            <div className="bg-blue-900 p-3 rounded-full text-white my-3">
              <MdOutlineDashboardCustomize />
            </div>
            <span className="text-white">Dashboard</span>
          </li>

          <li className="flex items-center gap-3">
            <div className="bg-blue-900 p-2 rounded-full text-white my-3">
              <IoMdStats />
            </div>
            <span className="text-white">Tables</span>
          </li>

          <li className="flex items-center gap-3">
            <div className="bg-blue-900 p-2 rounded-full text-white my-3">
              <FaHotTub />
            </div>
            <span className="text-white">Billing</span>
          </li>

          <li className="flex items-center gap-3">
            <div className="bg-blue-900 p-2 rounded-full text-white my-3">
              <GrTechnology className="fill-white" />
            </div>
            <span className="text-white">RTL</span>
          </li>
        </ul>

        {/* Account Pages */}
        <h3 className="text-white py-3">Account Pages</h3>
        <ul>
          <li className="flex items-center gap-4">
            <div className="bg-blue-900 p-2 rounded-full text-white my-3">
              <IoMdPerson />
            </div>
            <span className="text-white">Profile</span>
          </li>

          <li className="flex items-center gap-3">
            <div className="bg-blue-900 p-2 rounded-full text-white my-3">
              <IoNewspaperOutline />
            </div>
            <span className="text-white">Sign In</span>
          </li>

          <li className="flex items-center gap-4">
            <div className="bg-blue-900 p-2 rounded-full text-white">
              <FaPaperPlane />
            </div>
            <span className="text-white">Sign Up</span>
          </li>
        </ul>

        {/* Help Card */}
        <div className="mt-16">
          <HelpCard />
        </div>
      </div>
    </>
  );
}

export default SideSection;
