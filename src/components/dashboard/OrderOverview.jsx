import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderOverview = () => {
  const [orderOverview, setOrderOverview] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setOrderOverview(data.orderOverview));
  }, [orderOverview]);
  return (
    <div className="px-2 py-4">
      <div>
        <h1 className="text-white font-bold font-serif text-2xl tracking-wide">
          Orders overviews
        </h1>
        <p className="flex gap-1 items-center">
          <FaCheckCircle className="text-green-400" />
          <span className="text-xl text-slate-300 font-medium">
            +30% this month
          </span>
        </p>
      </div>
      <div className="space-y-3 mt-8">
        {orderOverview.map(({ details, date }, i) => (
          <div key={i} className="border-b border-gray-300 py-2">
            <div className="flex flex-col gap-1 items-start">
              <div className="flex items-center gap-1">
                <FaCheckCircle className="text-green-400" />
                <span className="text-lg text-slate-300 font-medium">
                  {details}
                </span>
              </div>
              <span className="text-gray-400 ms-5">{date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderOverview;
