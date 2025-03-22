import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }, [transactions]);
  return (
    <div className="px-3 py-4 bg-gradient-to-b from-black/80 to-blue-500/60 rounded-lg">
      <div className="flex justify-between items-center gap-4">
        <h1 className="font-bold text-xl sm:text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
          Your Transactions
        </h1>
        <p className="text-sm sm:text-base text-white/80 font-semibold tracking-wide">
          20-30 March, 2021
        </p>
      </div>
      <div className="my-8 mt-12 space-y-8">
        {transactions.map((items) => (
          <div
            key={items.id}
            className="flex justify-between items-center gap-4"
          >
            <div className="flex gap-2 items-center">
              {items.type !== "Deposit" ? (
                <FaRegArrowAltCircleDown className="text-red-500 size-10" />
              ) : (
                <FaRegArrowAltCircleUp className="text-green-500 size-10" />
              )}
              <div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-[2px]">
                  {items.name}
                </h2>
                <p className="text-white/70 text-sm sm:text-base">
                  {items.date}
                </p>
              </div>
            </div>
            <div>
              <h3
                className={`text-base sm:text-xl ${
                  items.type !== "Deposit" ? "text-red-500" : "text-green-500"
                }`}
              >
                {items.type === "Deposit"
                  ? `+ ${items.amount.toLocaleString()}`
                  : `- ${items.amount.toLocaleString()}`}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
