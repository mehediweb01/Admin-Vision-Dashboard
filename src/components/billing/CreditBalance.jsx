import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaMoneyBillWheat } from "react-icons/fa6";

const CreditBalance = () => {
  return (
    <div className="bg-gradient-to-tr from-black/45 via-blue-400/30 to-blue-400/70 px-5 py-3 rounded-md max-w-[400px] w-full shadow-md shadow-black">
      <div className="px-2 py-3 bg-gradient-to-br from-black/80 via-slate-400/70 to-blue-500/60 rounded-md flex justify-between items-start gap-4">
        <div>
          <h1 className="font-semibold font-serif text-sm text-white">
            Credit Balance
          </h1>
          <p className="font-bold text-[27px] text-white">$5412475</p>
        </div>
        <div className="text-white">
          <BsThreeDots className="size-8 hover:scale-125 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
      <div className="mt-4 mx-3">
        <div className="space-y-2">
          <h3 className=" uppercase font-bold text-sm text-white/60">newest</h3>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-3 rounded-full bg-blue-500/40">
                <FaMoneyBillWheat className="text-green-600 size-6" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-white font-serif">
                  Bill & Taxes
                </h3>
                <p className="text-white/80 text-sm font-medium">
                  Today, 16:35
                </p>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">-$350.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditBalance;
