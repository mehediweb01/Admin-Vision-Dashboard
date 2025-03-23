import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const ProfileInformation = () => {
  return (
    <div className="h-full px-4 py-7 bg-gradient-to-br from-white/60 via-black/60 to-red-400/40 rounded-lg text-white shadow-md shadow-black">
      <div className="border-b-2 border-slate-400 rounded-md pb-3">
        <h1 className="font-bold font-serif text-2xl leading-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500/60">
          Profile Information
        </h1>
        <p className="text-gray-300 text-sm mt-2">
          Hi, I'm Mehedi hasan, Decisions: Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsa, atque praesentium enim accusamus
          nostrum, omnis natus doloribus iure nesciunt sequi eius reprehenderit
          vel veniam obcaecati..
        </p>
      </div>
      <div className="space-y-2 mt-4">
        <p className="text-white text-base font-serif font-medium tracking-[2px]">
          <span className="text-white/70"> Full Name: </span> Md. Mehedi Hasan
        </p>
        <p className="text-white text-base font-serif font-medium tracking-[2px]">
          <span className="text-white/70">Mobile: </span> 0174564xx
        </p>
        <p className="text-white text-base font-serif font-medium tracking-[2px]">
          <span className="text-white/70">Email: </span>
          example@gmail.com
        </p>
        <p className="text-white text-base font-serif font-medium tracking-[2px]">
          <span className="text-white/70">Location: </span> Bangladesh
        </p>
        <p className="flex gap-3">
          <span className="text-white/70">Socical media: </span>
          <span className="flex items-center gap-3">
            <FaFacebook className="text-white size-4" />
            <FaTwitter className="text-white size-4" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileInformation;
