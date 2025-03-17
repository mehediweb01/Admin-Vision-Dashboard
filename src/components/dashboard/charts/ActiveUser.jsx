import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ActiveUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("/src/db/data.json")
      .then((res) => res.json())
      .then((data) => setUser(data.rangeData));
  }, [user]);
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={user} margin={{ top: 3, right: 2, left: 0, bottom: 10 }}>
        {/* <XAxis dataKey="day" /> */}
        <YAxis dataKey="users" />
        <Tooltip />
        <Bar dataKey="users" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActiveUser;
