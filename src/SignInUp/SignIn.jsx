import React from "react";
import { IoMdTimer } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { VscSearch } from "react-icons/vsc";

function SignIn() {
  return (
    <div className="">
      <div className=" relative w-full flex  sm:flex-col ">
        {/* LeftSide */}
        <div className=" bg-gradient-to-trl from-indigo-300 to-gray-500 p-10">
          <div className="flex flex-col items-center justify-center h-screen text-white tracking-wide">
            <p>INSPIRED BY THE FUTURE:</p>
            <h3 className="text-2xl">THE VISION UI DASHBOARD</h3>
          </div>
        </div>
        {/* RightSide */}
        <div className=" flex flex-col justify-center items-center bg-gray-800 text-white p-7 pt-4">
          <div>
            <h2 className="text-2xl font-bold">Nice to see you!</h2>
            <p className="text-gray-400 mb-6">
              Enter your email and password to sign in
            </p>
            <form className="w-80">
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
              <div>
                <label>
                  {" "}
                  <br /> <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <br />
              <button className="text-center bg-blue-700 w-full rounded-md p-2 hover:bg-blue-500 transition-opacity shadow-2xl hover:shadow-blue-600">
                SIGN IN
              </button>
            </form>
            <p className="text-center m-5">
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-[20%] text-gray-600">
            <p>
              @ 2021, Made with ❤️ by Simple & Creative Tim for a better web
            </p>
            <div className="flex gap-6">
              <a href="#">Marketplace</a>
              <a href="#">Blog</a>
              <a href="#">License</a>
            </div>
          </div>
        </div>

        {/* header */}
        <div className="absolute top-5 bg-transparent border border-gray-400 shadow backdrop-blur-lg px-2 py-2 mx-auto flex justify-between rounded-2xl  ml-[15%] gap-2 w-[70%]">
          <div className="flex justify-between items-center text-white text-sm">
            <p>Dashboard UI</p>
          </div>
          <div className="flex gap-3 text-sm items-center justify-center text-white">
            <div className="flex justify-center items-center gap-1">
              <span>
                <IoMdTimer />
              </span>
              <a href="#">
                <span>DASHBOARD</span>
              </a>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span>
                <CgProfile />
              </span>
              <a href="#">
                <span>PROFILE</span>
              </a>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span>
                <ImProfile />
              </span>
              <a href="#">SIGN UP</a>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span>
                <VscSearch />
              </span>
              <a href="#">
                <span>SIGN IN</span>
              </a>
            </div>
          </div>
          <div>
            <button className="text-white border border-black rounded-md bg-blue-700 text-sm p-2 hover:cursor-pointer hover:scale-105 transition-all">
              Free Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
