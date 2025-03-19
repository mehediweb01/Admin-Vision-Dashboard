import React from "react";
import { IoMdTimer } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className="relative w-full flex sm:flex-row flex-col justify-center items-center">
        {/* header */}
        <div className="fixed top-5 left-0 bg-transparent border border-gray-400 shadow backdrop-blur-lg px-2 py-2 flex justify-between rounded-2xl  ml-[15%] gap-2 w-[70%]">
          <div className="text-white text-sm flex justify-center items-center">
            <p>Dashboard UI</p>
          </div>
          <div className="flex md:flex-row flex-col gap-6 text-sm items-center justify-center text-white">
            <Link to="/" className="flex justify-center items-center gap-1">
              <span>
                <IoMdTimer />
              </span>
              <span>DASHBOARD</span>
            </Link>
            <Link
              to="/profile"
              className="flex gap-1 justify-center items-center"
            >
              <span>
                <CgProfile />
              </span>
              <span>PROFILE</span>
            </Link>
            <Link
              to="/sign-up"
              className="flex gap-1 justify-center items-center"
            >
              <span>
                <ImProfile />
              </span>
              <span>SIGN UP</span>
            </Link>
            <Link
              to="/sign-in"
              className="flex gap-1 justify-center items-center"
            >
              <span>
                <VscSearch />
              </span>
              <span>SIGN IN</span>
            </Link>
          </div>
          <div className="sm:flex hidden justify-center items-center">
            <button className="text-white border border-black rounded-md bg-blue-700 text-sm p-2 hover:cursor-pointer hover:scale-105 transition-all">
              Free Download
            </button>
          </div>
        </div>
        {/* LeftSide */}
        <div className="w-full md:w-[35%] md:mt-0 mt-56 mb-5 md:mb-0 bg-gradient-to-trl from-indigo-300 to-gray-500 px-10">
          <div className="flex flex-col items-start justify-center text-white tracking-wide">
            <p>INSPIRED BY THE FUTURE:</p>
            <h3 className="text-2xl">THE ADMIN VISION UI DASHBOARD</h3>
          </div>
        </div>
        {/* RightSide */}
        <div className="flex flex-col justify-start items-start bg-gray-800 text-white rounded-md md:w-[65%] w-full md:p-6 p-0 md:ps-24 ps-5">
          <div className="pt-28">
            <h2 className="text-2xl font-bold">Nice to see you!</h2>
            <p className="text-gray-400 mb-6">
              Enter your email and password to sign in
            </p>
            <form className="w-full">
              <label htmlFor="email">Email:</label> <br />
              <input
                type="email"
                placeholder="Your Email Address"
                className="border px-2 p-1 rounded-3xl shadow bg-gray-700 w-full "
              />{" "}
              <br />
              <br />
              <label htmlFor="password">Password:</label> <br />
              <input
                type="password"
                placeholder="Your Password"
                className="border px-2 p-1 rounded-3xl shadow bg-gray-700 w-full"
              />
              <div className="mt-3">
                <label className="space-x-1">
                  <input type="checkbox" />
                  <span> Remember me</span>
                </label>
              </div>
              <br />
              <button
                type="button"
                className="text-center bg-blue-700 w-full rounded-md p-2 hover:bg-blue-500 transition-opacity shadow-2xl hover:shadow-blue-600"
              >
                SIGN IN
              </button>
            </form>
            <p className="text-center m-5">
              Don't have an account? <Link to="/sign-up">Sign up</Link>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-[5%] text-gray-600">
            <p>
              @ 2021, Made with ❤️ by Simple & Creative Tim for a better web
            </p>
            <div className="flex gap-6">
              <Link to="/sign-in">Marketplace</Link>
              <Link to="/sign-in">Blog</Link>
              <Link to="/sign-in">License</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
