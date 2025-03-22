import React from "react";
import Navbar from "../components/shared/Navbar";
import SideSection from "../components/shared/Sidebar/SideSection";
import VisionCard from "../components/billing/VisionCard";
import CreditBalance from "../components/billing/CreditBalance";
import Invoice from "../components/billing/Invoice";
import PaymentMethod from "../components/billing/PaymentMethod";
import Footer from "./../components/shared/Footer";
import BillingInformation from "../components/billing/BillingInformation";
import Transactions from "../components/billing/Transactions";

const Billing = () => {
  return (
    <main className="flex">
      <div className="border-r border-slate-300">
        <SideSection />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="px-2 py-4">
          <div className="flex lg:flex-row flex-col gap-3 items-start">
            <div className="lg:w-[60%] w-full">
              <div className="flex justify-between items-start gap-4 md:flex-row flex-col">
                <VisionCard />
                <CreditBalance />
              </div>
              <div className="mt-8">
                <PaymentMethod />
              </div>
            </div>
            <div className="lg:w-[40%] w-full">
              <Invoice />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-start justify-start lg:justify-between gap-4 mx-2 my-4">
          <div className="lg:w-[60%] w-full">
            <BillingInformation />
          </div>
          <div className="lg:w-[40%] w-full">
            <Transactions />
          </div>
        </div>
        <div className="my-4">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Billing;
