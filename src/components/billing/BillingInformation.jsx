import React, { useEffect, useState } from "react";
import InformationCard from "./InformationCard";

const BillingInformation = () => {
  const [billingInformation, setBillingInformation] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBillingInformation(data.billingInformation));
  }, [billingInformation]);
  return (
    <div className="px-3 py-4 bg-gradient-to-b from-black/80 to-blue-500/60 rounded-lg">
      <h1 className="font-bold font-serif text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
        Billing Information
      </h1>
      <div className="mt-4 space-y-4">
        {billingInformation.map((items) => (
          <InformationCard key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
};

export default BillingInformation;
