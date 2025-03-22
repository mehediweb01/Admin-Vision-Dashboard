import React, { useEffect, useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
const Invoice = () => {
  const [invoice, setInvoice] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setInvoice(data.invoice));
  }, [invoice]);
  return (
    <div className="px-3 py-4 bg-gradient-to-b from-black/80 to-blue-500/60 rounded-lg">
      <div className="flex justify-between items-center gap-3">
        <h1 className="font-bold font-serif text-2xl text-white">Invoices</h1>
        <button className=" uppercase bg-blue-500 px-6 py-2 rounded-2xl cursor-pointer text-white font-semibold tracking-wider hover:bg-blue-700 transition-all duration-300">
          view all
        </button>
      </div>
      <div className="space-y-6 mt-8">
        {invoice.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center gap-3"
          >
            <div className="space-y-1">
              <h3 className="font-semibold font-serif text-white text-xl tracking-wide">
                {item.date}
              </h3>
              <p className="font-medium text-gray-400 text-sm ">
                {item.invoiceId}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-medium text-white/60 text-sm">{item.amount}</p>
              <div className="flex gap-0.5 items-center cursor-pointer group">
                <AiOutlineFilePdf className="text-white group-hover:text-gray-400 transition-all duration-300" />
                <p className=" uppercase text-base text-white font-bold tracking-widest group-hover:text-gray-400 transition-all duration-300">
                  {item.downloadOption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invoice;
