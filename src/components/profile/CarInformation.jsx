import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { CircularProgress } from "@mui/material";
const CarInformation = () => {
  const details = [
    {
      title: "Battery health",
      description: "78%",
      icon: <FaCarAlt className="text-white" size={30} />,
    },
    {
      title: "Consumption",
      description: "169W/km",
      icon: <BsFillLightningChargeFill className="text-white" size={30} />,
    },
    {
      title: "Efficiency",
      description: "+20%",
    },
    {
      title: "This Week",
      description: "1.34km",
    },
  ];
  return (
    <div className="w-full h-full px-4 py-7 bg-gradient-to-br from-white/60 via-black/60 to-red-400/40 rounded-lg shadow-md shadow-black flex flex-col justify-start items-start gap-4">
      <div>
        <h1 className="font-bold font-serif text-2xl leading-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500/60">
          Car Information
        </h1>
        <p className="text-base font-medium text-white mt-2">
          Hello, Mehedi Hasan, your car is ready.
        </p>
      </div>
      <div className="w-full flex sm:flex-row flex-col justify-between items-start gap-3">
        <div>
          <div className="space-y-2">
            <div className="relative bg-black/40 rounded-full">
              <CircularProgress
                variant="determinate"
                value={80}
                size={110}
                thickness={2}
                sx={{ color: "#05CD99" }}
              />
              <div className="absolute top-4 left-4 text-center flex flex-col justify-center items-center">
                <BsFillLightningChargeFill className="text-green-500 size-4" />
                <p className="font-bold font-serif text-xl text-white">
                  {80} %
                </p>
                <p className="font-medium text-sm text-white">current load</p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl font-serif text-white">
                0h 58min
              </h1>
              <p className="text-sm text-white/70">Time to full charge</p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-black/40 rounded-md px-4 py-2 w-full"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-medium text-sm text-white">
                    {detail.title}
                  </h1>
                  <p className="text-xs text-white/70">{detail.description}</p>
                </div>
                <div>{detail.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarInformation;
