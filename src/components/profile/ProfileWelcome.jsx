import React from "react";
import { FaArrowRight } from "react-icons/fa";
const ProfileWelcome = () => {
  return (
    <div className="flex flex-col justify-between items-stretch gap-2 h-full px-4 py-7 bg-gradient-to-br from-white/60 via-black/60 to-red-400/40 rounded-lg text-white shadow-md shadow-black">
      <div className="space-y-2">
        <h2 className="text-xl font-bold font-serif">welcome back,</h2>
        <p className="font-thin text-sm leading-[140%]">
          Nice to see you, Mehedi Hasan
        </p>
      </div>
      <div>
        <p className="flex gap-2 items-center font-serif text-sm font-medium cursor-pointer hover:text-white/60">
          Turn on your car
          <span>
            <FaArrowRight />
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileWelcome;
