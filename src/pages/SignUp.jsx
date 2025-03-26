import React from "react";
import Footer from "../components/shared/Footer";
import { IoLogoFacebook } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { RiGoogleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { IoMdTimer } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { VscSearch } from "react-icons/vsc";

function SignUp() {
  return (
    <div>
      <div className="relative w-full min-h-screen">
        {/* header */}
        <div className="md:fixed top-5 left-0 bg-transparent border border-gray-400 shadow backdrop-blur-lg px-2 py-2 flex justify-between rounded-2xl  ml-[15%] gap-2 w-[70%]">
          <div className="text-white text-sm flex justify-center items-center">
            <p>Dashboard UI</p>
          </div>
          <div className="flex md:flex-row flex-col gap-6 text-sm items-center justify-center text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center items-center gap-1 text-green-300 font-semibold "
                  : "text-white flex justify-center items-center gap-1"
              }
            >
              <span>
                <IoMdTimer />
              </span>
              <span>DASHBOARD</span>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center items-center gap-1 text-green-300 font-semibold "
                  : "text-white flex justify-center items-center gap-1"
              }
            >
              <span>
                <CgProfile />
              </span>
              <span>PROFILE</span>
            </NavLink>
            <NavLink
              to="/sign-up"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center items-center gap-1 text-green-300 font-semibold "
                  : "text-white flex justify-center items-center gap-1"
              }
            >
              <span>
                <ImProfile />
              </span>
              <span>SIGN UP</span>
            </NavLink>
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center items-center gap-1 text-green-300 font-semibold "
                  : "text-white flex justify-center items-center gap-1"
              }
            >
              <span>
                <VscSearch />
              </span>
              <span>SIGN IN</span>
            </NavLink>
          </div>
          <div className="sm:flex hidden justify-center items-center">
            <button className="text-white border border-black rounded-md bg-blue-700 text-sm p-2 hover:cursor-pointer hover:scale-105 transition-all">
              Free Download
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-center items-center min-h-screen">
          {/* left side */}
          <div className="mx-auto md:w-1/2 w-full flex justify-center items-center min-h-screen bg-[url('/images/SignInUpBG.jpg')] bg-cover bg-center py-[150px] md:py-[350px]">
            <div className="text-white text-start ms-8 w-full">
              <h1 className="text-white tracking-wide">
                INSPIRED BY THE FUTURE:
              </h1>
              <h1 className="text-2xl">THE VISION UI DASHBOARD</h1>
            </div>
          </div>
          {/* right side */}
          <div className="min-h-screen mx-auto bg-gray-600 md:w-1/2 w-full">
            <div className="md:m-18 m-8">
              <h2 className="text-center text-white font-bold text-2xl">
                Welcome!
              </h2>
              <p className="text-center text-white  text-sm">
                Use these awesome forms to login or create new <br /> account in
                your project for free.
              </p>
              <div className="border border-white shadow-2xl rounded-2xl  m-10 mx-5 ">
                <div className="text-white">
                  <p className="text-center">Register with</p>
                  <div className="flex justify-center items-center gap-2 p-2">
                    <button className="border p-2 rounded-md ">
                      <IoLogoFacebook />
                    </button>
                    <button className="border p-2 rounded-md ">
                      <BsApple />
                    </button>
                    <button className="border p-2 rounded-md ">
                      <RiGoogleFill />
                    </button>
                  </div>
                  <p className="text-center">or</p>
                  <form className="w-full p-2">
                    <label htmlFor="text">Name:</label> <br />
                    <input
                      type="email"
                      placeholder="Your Full Name"
                      className="border px-2 p-1 rounded-3xl shadow bg-gray-700 w-full "
                    />{" "}
                    <br />
                    <br />
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
                      SIGN UP
                    </button>
                    <p className="text-center m-5">
                      Already have an account?{" "}
                      <NavLink to="/sign-in" className="font-bold">
                        Sign in
                      </NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default SignUp;
