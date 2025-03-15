import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const Welcome = () => {
  return (
    <div className="flex sm:flex-row flex-col-reverse justify-between items-center sm:items-start bg-gradient-to-r from-black/70 to-blue-400 p-4 rounded-md shadow-inner shadow-sky-300 py-4 h-fit sm:h-[280px]">
      <div className="flex flex-col justify-between h-full w-full text-start">
        <div className="space-y-2">
          <h3 className="font-light text-sm text-gray-400 ">Welcome back,</h3>
          <h1 className="font-bold font-serif text-xl text-white ">
            Mehedi Hasan
          </h1>
          <p className="font-light text-sm text-gray-400 max-w-[60%] capitalize">
            see you again! ask me anything
          </p>
        </div>
        <a
          href="#"
          className="text-white text-sm font-thin flex gap-2 items-center hover:text-blue-400 hover:transition-all hover:duration-300 hover:font-semibold sm:mt-0 mt-4"
        >
          <span>Tap to record</span> <FaLongArrowAltRight />
        </a>
      </div>
      <div className="w-1/2 sm:mb-0 mb-5">
        <img
          src="/images/mushroom.jpg"
          alt="mushroom"
          className="rounded-lg h-full w-full sm:h-[140px] "
        />
      </div>
    </div>
  );
};

export default Welcome;
