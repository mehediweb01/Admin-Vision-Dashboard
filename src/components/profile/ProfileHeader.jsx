import React from "react";
import { GiCaptainHatProfile } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProfileHeader = () => {
  const details = [
    {
      name: "overview",
      icon: <FaBoxOpen className="size-5" />,
    },
    {
      name: "teams",
      icon: <PiMicrosoftTeamsLogo className="size-5" />,
    },
    {
      name: "projects",
      icon: <FaProjectDiagram className="size-5" />,
    },
  ];
  return (
    <div className="bg-gradient-to-br from-black/70 to-black/20 backdrop-blur-[21px] px-2 sm:px-6 py-4 shadow-lg rounded-md shadow-white/20 flex sm:flex-row flex-col justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <GiCaptainHatProfile className="text-3xl text-white size-12" />
        <div>
          <h3 className="font-bold font-serif text-base sm:text-xl text-white">
            Mehedi Hasan
          </h3>
          <p className="font-medium text-white/60 text-xs sm:text-sm">
            mehedihasan87456@gmail.com
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:justify-items-center">
        {details.map((items, i) => (
          <Link
            to={"/profile"}
            key={i}
            className="text-white flex gap-2 items-center hover:bg-blue-500/50 hover:px-3 hover:py-2 hover:rounded-md transition-all duration-300"
          >
            <span>{items.icon}</span>
            <span className="font-semibold tracking-wide text-base lg:text-xl font-serif">
              {items.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileHeader;
