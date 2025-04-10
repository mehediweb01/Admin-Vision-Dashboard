import React, { useEffect, useState } from "react";
import KPICard from "../components/dashboard/KPICard";
import Welcome from "../components/dashboard/Welcome";
import Satisfaction from "../components/dashboard/Satisfaction";
import Tracking from "../components/dashboard/Tracking";
import Overview from "../components/dashboard/charts/Overview";
import ActiveUser from "../components/dashboard/charts/ActiveUser";
import KPIWidget from "../components/dashboard/KPIWidget";
import Navbar from "./../components/shared/Navbar";
import SideSection from "../components/shared/Sidebar/SideSection";
import ProjectList from "../components/dashboard/ProjectList";
import OrderOverview from "../components/dashboard/OrderOverview";
import Footer from "../components/shared/Footer";

const Dashboard = () => {
  const [kpi, setKpi] = useState([]);
  const [kpiWidgets, setKpiWidget] = useState([]);
  useEffect(() => {
    try {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          setKpi(data.kpi);
          setKpiWidget(data.KPIWidget);
        });
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  }, [kpi, kpiWidgets]);
  return (
    <main className="flex justify-between items-start">
      <div className="max-w-[20%] min-h-screen border-r border-slate-400 mr-1">
        <SideSection />
      </div>
      <div className="mb-4">
        <Navbar />
        {/* kpi card  */}
        <div className="my-8 ms-1 me-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {kpi.map((item) => (
            <KPICard {...item} key={item.id} />
          ))}
        </div>
        {/* welcome,satisfaction, tracking card  */}
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Welcome />
          <Satisfaction percentage={90} />
          <Tracking value={95} />
        </div>
        {/* overview & user  */}
        <div className="flex sm:flex-row flex-col justify-between items-center gap-2 ">
          <div className="w-full bg-gradient-to-r from-black/90 to-black/60 rounded-sm py-5">
            <div className="p-4">
              <h1 className="text-white font-semibold tracking-[1px]">
                Sales overview
              </h1>
              <p className="text-green-400 text-xs font-thin tracking-[2px]">
                (5+ more){" "}
                <span className="text-white">
                  in {new Date().getFullYear()}
                </span>
              </p>
            </div>
            <Overview />
          </div>
          <div className="w-full bg-gradient-to-r from-black/90 to-black/60 rounded-sm py-2">
            <div>
              <ActiveUser />
            </div>
            <div className="bg-gradient-to-br from-sky-500/60 to-white/45 p-4 rounded-md m-4">
              <h1 className="text-white tracking-wider font-semibold text-base">
                Active users
              </h1>
              <p className="text-green-400 font-thin text-sm">
                (+23) <span className="text-white">then last week</span>
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {kpiWidgets.map((item, i) => (
                  <KPIWidget {...item} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* ProjectList Tables */}
        <div className="flex md:flex-row flex-col gap-3 justify-between items-start mt-4">
          <div className="max-w-full md:max-w-[65%] w-full bg-gradient-to-r from-[#060B28BD] to-sky-800/60 p-2 rounded-md">
            <ProjectList />
          </div>
          <div className="max-w-full md:max-w-[35%] w-full bg-gradient-to-r from-[#060B28BD] to-sky-800/60 p-2 rounded-md">
            <OrderOverview />
          </div>
        </div>
        {/* footer */}
        <div className="my-3">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
