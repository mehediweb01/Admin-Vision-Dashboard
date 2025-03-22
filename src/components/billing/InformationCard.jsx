import React from "react";

const InformationCard = ({ name, companyName, email, VatNumber }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500/95 to-black/40 px-3 py-5 flex sm:flex-row flex-col justify-between items-start gap-3 rounded-lg w-full shadow-md shadow-white/40">
      <div>
        <h1 className="font-bold font-serif text-xl sm:text-2xl text-white tracking-wide">
          {name}
        </h1>
        <h3 className="font-semibold text-base sm:text-xl text-white tracking-wide">
          Company Name: {companyName}
        </h3>
        <p className="text-sm sm:text-base text-white">
          Email Address: {email}
        </p>
        <p className="text-sm sm:text-base text-white">
          VAT Number: {VatNumber}
        </p>
      </div>
      <div className="space-x-4">
        <button className="cursor-pointer uppercase font-semibold text-red-500 hover:text-red-800 transition-all duration-300">
          delete
        </button>
        <button className="cursor-pointer uppercase font-semibold text-white hover:text-white/80 transition-all duration-300">
          edit
        </button>
      </div>
    </div>
  );
};

export default InformationCard;
