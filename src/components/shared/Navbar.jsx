import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <main className="py-4 px-2 rounded-md flex justify-center md:justify-between items-center shadow-sm shadow-white bg-transparent/25">
      <div className="md:block hidden">
        <Breadcrumbs aria-label="breadcrumb">
          <Typography className="text-white text-base sm:text-xl font-serif">
            Pages
          </Typography>
          <Link
            underline="hover"
            className="text-white text-base sm:text-xl font-serif hover:text-black/50 transition-all duration-300"
            href="/material-ui/getting-started/installation/"
          >
            Dashboard
          </Link>
        </Breadcrumbs>
        <p className="text-white text-base sm:text-xl font-serif">Dashboard</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="align-middle">
          <CiSearch className="size-8 -ms-24 mt-1 float-end text-white hover:cursor-pointer hover:text-sky-300" />
          <input
            type="text"
            placeholder="Type here..."
            className="border border-white/75 rounded-md opacity-85 px-4 py-2 hover:shadow-md hover:shadow-white hover:outline-none hover:border-none focus:outline-sky-400 transition-all duration-200 text-white md:w-[85%] w-3/4"
          />
        </div>
        <div className="flex gap-2 text-white">
          <Link
            to="/"
            className=" items-center gap-2 text-white hover:text-sky-200 border border-slate-100/20 px-2 py-1 rounded-full sm:flex hidden"
          >
            <FaRegUser />
            sign in
          </Link>

          <IoIosNotificationsOutline className="size-6" />
          <CiSettings className="size-6" />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
