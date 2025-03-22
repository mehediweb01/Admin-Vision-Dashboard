import React from "react";
import Navbar from "../components/shared/Navbar";
import SideSection from "../components/shared/Sidebar/SideSection";
import VisionCard from "../components/billing/VisionCard";
import CreditBalance from "../components/billing/CreditBalance";
import Invoice from "../components/billing/Invoice";

const Billing = () => {
  return (
    <main className="flex">
      <div className="border-r border-slate-300">
        <SideSection />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="px-2 py-4">
          <div className="flex md:flex-row flex-col gap-3 items-start">
            <div className="flex justify-between items-start gap-4 md:w-[60%] w-full lg:flex-row flex-col">
              <VisionCard />
              <CreditBalance />
            </div>
            <div className="md:w-[40%] w-full">
              <Invoice />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Billing;
