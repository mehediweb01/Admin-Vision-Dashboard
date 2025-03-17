import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Overview = () => {
  const [overData, setOverData] = useState([]);
  useEffect(() => {
    fetch("/src/db/data.json")
      .then((res) => res.json())
      .then((data) => setOverData(data.overData));
  }, [overData]);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={overData}
        margin={{ top: 3, right: 2, left: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0075FF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis dataKey="amt" />
        <CartesianGrid strokeDasharray="0.1" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="p"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Overview;
