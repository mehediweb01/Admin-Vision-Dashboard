import React from "react";

const KPICard = ({ name, num, percent, image }) => {
  return (
    <div className="flex justify-between items-center gap-2 bg-gradient-to-r from-black/75 to-slate-500 p-4 rounded-lg">
      <div>
        <h1 className="font-bold text-base text-gray-300">{name}</h1>
        <p className="space-x-2">
          <span className="text-white text-sm font-semibold">{num}</span>
          <span className="text-green-500 text-sm">{percent}%</span>
        </p>
      </div>
      <div className="px-3 py-1.5 rounded-lg bg-blue-500">
        <img src={image} alt={name} className="rounded-md w-[32px]" />
      </div>
    </div>
  );
};

export default KPICard;
