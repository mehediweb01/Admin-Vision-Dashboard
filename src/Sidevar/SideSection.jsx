// import React, { useState } from 'react'
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { FaHotTub } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";

function SideSection() {
  // const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex">
      {/* mobile menu button */}
      {/* <button >
<HiMiniBarsArrowDown/>
      </button> */}
      {/* sidebar header */}
      <div>
        <h2 className="text-xl font-bold text-gray-300 mb-5 p-4">
          Dashboard UI
        </h2>
        <div className="border-b border-gray-300 my-5 mx-2"></div>
        {/* Sidebar */}
        <ul className="">
          <li className="flex items-center gap-4">
            <MdOutlineDashboardCustomize />
            <span>Dashboard</span>
          </li>

          <li className="flex items-center gap-4">
            <span>
              {" "}
              <IoMdStats />
              Tables
            </span>
          </li>
          <li className="flex items-center gap-4">
            <FaHotTub />
            <span>Billing</span>
          </li>
          <li className="flex items-center gap-4">
            <GrTechnology />
            <span>RTL</span>
          </li>
        </ul>
        {/* Account page section */}
        <h3>Account Pages</h3>
        <ul>
          <li className="flex items-center gap-4">
            <IoMdPerson />
            <span>Profile</span>
          </li>
          <li className="flex items-center gap-4">
            <IoNewspaperOutline />
            <span>Sign In</span>
          </li>
          <li className="flex items-center gap-4">
            <FaPaperPlane />
            <span>Sign Up</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideSection