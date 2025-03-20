import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import Progress from "./Progress";
import { Avatar, AvatarGroup } from "@mui/material";

const ProjectList = () => {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjectsData(data.projectsData));
  }, [projectsData]);
  return (
    <div className="w-full py-4 ps-3">
      <div className="flex justify-between items-start gap-3">
        <div>
          <h1 className="text-white font-bold font-serif text-2xl tracking-wide">
            Projects
          </h1>
          <p className="flex gap-1 items-center">
            <FaCheckCircle className="text-green-400" />
            <span className="text-xl text-slate-300 font-medium">
              30 done this month
            </span>
          </p>
        </div>
        <div className="hover:scale-125 transition-all duration-300 cursor-pointer">
          <HiOutlineDotsVertical className="text-white size-6" />
        </div>
      </div>
      <div className="md:block hidden overflow-x-auto my-4">
        <table className="min-w-full table-auto border-collapse text-start">
          <thead>
            <tr className="border-b border-amber-400">
              {["COMPANIES", "MEMBERS", "BUDGET", "COMPLETION"].map(
                (heading) => (
                  <th
                    key={heading}
                    className="px-2 py-3 text-start text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-900/10 tracking-[1px] whitespace-nowrap"
                  >
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {projectsData.map((details, i) => (
              <tr key={i} className="border-b border-amber-400">
                <td className="text-white text-xl font-medium font-serif">
                  {details.name}
                </td>
                <td className="flex justify-start items-center py-2">
                  <AvatarGroup total={10}>
                    <Avatar sx={{ bgcolor: "orange" }}>{details.member}</Avatar>
                  </AvatarGroup>
                </td>
                <td className="text-white/80 font-bold text-base tracking-wider">
                  $ {details.amount}
                </td>
                <td className="py-3">
                  <Progress value={details.progress} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* mobile device table */}
      <div className="block md:hidden my-4 space-y-4">
        {projectsData.map((details, i) => (
          <div
            key={i}
            className="bg-gray-800/60 p-4 rounded-lg shadow-md border border-amber-400 space-y-2"
          >
            <h2 className="text-white text-lg font-bold">{details.name}</h2>
            <div className="text-white/80">
              <span className="text-white/80"> Member:</span>
              <div className="flex justify-start items-center">
                <AvatarGroup total={10}>
                  <Avatar sx={{ bgcolor: "orange" }}>{details.member}</Avatar>
                </AvatarGroup>
              </div>
            </div>
            <p className="text-white/80">
              Budget: <span className="font-bold">${details.amount}</span>
            </p>
            <p className="text-white/80">Completion:</p>
            <Progress value={details.progress} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
