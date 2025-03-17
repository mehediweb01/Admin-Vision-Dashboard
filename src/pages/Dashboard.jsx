import React, { useEffect, useState } from "react";
import KPICard from "../components/dashboard/KPICard";
import Welcome from "../components/dashboard/Welcome";
import Satisfaction from "../components/dashboard/Satisfaction";
import Tracking from "../components/dashboard/Tracking";
import Overview from "../components/dashboard/charts/Overview";
import ActiveUser from "../components/dashboard/charts/ActiveUser";
import KPIWidget from "../components/dashboard/KPIWidget";

const Dashboard = () => {
  const [kpi, setKpi] = useState([]);
  const [kpiWidgets, setKpiWidget] = useState([]);
  useEffect(() => {
    try {
      fetch("./src/db/data.json")
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
    <main className="my-8 ms-1 me-4">
      {/* kpi card start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {kpi.map((item) => (
          <KPICard {...item} key={item.id} />
        ))}
      </div>
      {/* kpi card end */}
      {/* welcome,satisfaction, tracking card start */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Welcome />
        <Satisfaction percentage={90} />
        <Tracking value={95} />
      </div>
      {/* welcome,satisfaction, tracking card start end */}
      {/* overview & user start */}
      <div className="flex sm:flex-row flex-col justify-between items-center gap-2 ">
        <div className="w-full bg-gradient-to-r from-black/90 to-black/60 rounded-sm py-5">
          <div className="p-4">
            <h1 className="text-white font-semibold tracking-[1px]">
              Sales overview
            </h1>
            <p className="text-green-400 text-xs font-thin tracking-[2px]">
              (5+ more){" "}
              <span className="text-white">in {new Date().getFullYear()}</span>
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
      {/* overview & user end */}
    </main>
  );
};

export default Dashboard;
