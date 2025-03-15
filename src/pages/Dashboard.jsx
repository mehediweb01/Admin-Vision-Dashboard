import React, { useEffect, useState } from "react";
import KPICard from "../components/dashboard/KPICard";
import Welcome from "../components/dashboard/Welcome";
import Satisfaction from "../components/dashboard/Satisfaction";
import Tracking from "../components/dashboard/Tracking";

const Dashboard = () => {
  const [kpi, setKpi] = useState([]);
  useEffect(() => {
    fetch("/src/db/data.json")
      .then((res) => res.json())
      .then((data) => setKpi(data.kpi));
  }, [kpi]);
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
    </main>
  );
};

export default Dashboard;
