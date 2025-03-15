import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
const Tracking = ({ value }) => {
  const [animateValue, setAnimateValue] = useState(0);
  const mainValue = (value / 100) * 10;
  useEffect(() => {
    setTimeout(() => {
      const timer = setTimeout(() => {
        setAnimateValue(value);
      }, 300);
      return () => clearTimeout(timer);
    }, 300);
  }, [value]);
  return (
    <div className="flex flex-col justify-start gap-9 bg-gradient-to-r from-black/70 to-blue-400 p-4 rounded-md shadow-inner shadow-sky-300 h-fit sm:h-[280px]">
      <div className="flex justify-between items-center gap-3">
        <h1 className="font-bold font-serif text-base sm:text-xl text-white/85">
          Tracking
        </h1>
        <div className="px-3 py-1 bg-sky-600 rounded-lg shadow-inner shadow-black cursor-pointer">
          <BsThreeDots />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-between gap-3">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-black/60 px-4 py-2 rounded-lg w-[160px]">
            <h2 className="text-gray-400 font-bold font-serif text-base sm:text-xl">
              Invited
            </h2>
            <p className="text-white text-base font-semibold ">6000 people</p>
          </div>
          <div className="bg-black/60 px-4 py-2 rounded-lg w-[160px]">
            <h2 className="text-gray-400 font-bold font-serif text-base sm:text-xl">
              Bonus
            </h2>
            <p className="text-white text-base font-semibold ">40000</p>
          </div>
        </div>
        <div className="relative">
          <CircularProgress
            variant="determinate"
            value={animateValue}
            size={160}
            thickness={4}
            sx={{ color: "#05CD99" }}
          />
          <div className=" absolute top-12 left-10 text-center">
            <p className="text-white/60 text-base font-semibold">Safety</p>
            <p className="font-bold font-serif text-4xl text-white">
              {mainValue}
            </p>
            <p className="text-base text-white font-thin">TotalScore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
