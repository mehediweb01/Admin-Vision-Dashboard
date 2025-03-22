import React from "react";
import { IoMdTimer } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Footer from "../components/shared/Footer";

function SignIn() {
  return (
    <>
      <div className="w-full">
        {" "}
        <div className="relative w-full h-screen flex sm:flex-row flex-col justify-center items-center">
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
          <div
            className=" h-full w-full   
              flex justify-center items-center"
            style={{
              backgroundImage: "url('/images/SignInUpBG.jpg')  ",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center text-white tracking-wide m-20">
              <p>INSPIRED BY THE FUTURE:</p>
              <h3 className="text-2xl">THE ADMIN VISION UI DASHBOARD</h3>
            </div>
          </div>
          {/* RightSide */}
          <div className="flex flex-col justify-start items-start h-full w-full  bg-gray-900 text-white  pl-19 pt-19">
            <div className="pt-28 pl-5">
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
                Don't have an account? <Link to="/sign-in" className="font-bold">Sign IN</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default SignIn;
