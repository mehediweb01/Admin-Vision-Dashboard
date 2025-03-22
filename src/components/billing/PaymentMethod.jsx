import React from "react";
import { MdEdit } from "react-icons/md";
import IconSvg from "../../assets/svg/Icon";
const PaymentMethod = () => {
  return (
    <div className="px-4 py-8 bg-gradient-to-r from-black/60 to-sky-700/80 rounded-md shadow-sm shadow-black">
      <div className="space-y-10">
        <div className="flex justify-between items-start gap-3">
          <h1 className="text-white font-serif text-xl md:text-2xl font-bold">
            Payment Method
          </h1>
          <button className="uppercase bg-blue-500 px-6 py-2 rounded-xl cursor-pointer text-white font-semibold tracking-wider hover:bg-blue-700 transition-all duration-300 text-sm md:text-base">
            add a new card
          </button>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between gap-2">
          <div className="flex justify-between items-center gap-8 border border-white px-4 py-4 rounded-2xl shadow-md shadow-white">
            <div className="flex items-center gap-4">
              <IconSvg />
              <p className="text-white text-sm font-semibold tracking-widest">
                9212 8339 8823 XXXX
              </p>
            </div>
            <div className="cursor-pointer">
              <MdEdit className="text-white" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-8 border border-white px-4 py-5 rounded-2xl shadow-md shadow-white">
            <div className="flex items-center gap-4">
              <p className="bg-clip-text bg-gradient-to-r text-transparent from-white to-white/50 font-medium text-sm uppercase">
                visa
              </p>
              <p className="text-white text-sm font-semibold tracking-widest">
                9212 8339 8823 XXXX
              </p>
            </div>
            <div className="cursor-pointer">
              <MdEdit className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
