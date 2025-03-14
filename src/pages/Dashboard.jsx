import React, { useEffect, useState } from "react";
import KPICard from "../components/dashboard/KPICard";

const Dashboard = () => {
  const [kpi, setKpi] = useState([]);
  useEffect(() => {
    fetch("/src/db/data.json")
      .then((res) => res.json())
      .then((data) => setKpi(data.kpi));
  },[kpi]);
  return (
    <main className="my-8 me-4">
      {/* kpi card start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {kpi.map((item) => (
          <KPICard {...item} key={item.id} />
        ))}
      </div>
      {/* kpi card end */}
    </main>
  );
};

export default Dashboard;
