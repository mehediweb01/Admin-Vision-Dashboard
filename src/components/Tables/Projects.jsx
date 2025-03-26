import React from 'react'
import { useState, useEffect } from 'react';
import Progress from '../dashboard/Progress';
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";



function Projects() {
         const [tableData, setTableData] = useState([]);
         useEffect(() => {
           fetch("/data.json")
             .then((res) => res.json())
             .then((data) => setTableData(data.tableData));
         }, [tableData]);
  return (
    <div className="bg-gradient-to-r from-blue-600/40 to-black/60 px-4 py-6 rounded-2xl">
      <div className='text-white '>
        <h1 className='text-2xl'>Projects</h1>
        <p className="flex gap-1 items-center">
          {" "}
          <span>
            <CiCircleCheck className="text-white0" />{" "}
          </span>
          30 done this month
        </p>
      </div>
      <div className="md:block hidden overflow-x-auto my-4">
        <table className="min-w-full table-auto border-collapse text-start">
          <thead>
            <tr className="border-b border-amber-400">
              {["COMPANIES",  "BUDGET","STATUS", "COMPLETION"].map(
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
            {tableData.map((details) => (
              <tr key={details.id} className="border-b border-amber-400">
                <td className="text-white text-xl font-medium font-serif">
                  <div className="flex items-center gap-1">
                    <img
                      src={details.img}
                      alt={details.name}
                      className="w-10 h-10 rounded-lg"
                    />
                    <h1>{details.name}</h1>
                  </div>
                </td>
                <td className="flex justify-start items-center py-2 text-white">
                  <p>{details.budget}</p>
                </td>
                <td className="text-white/80 font-bold text-base tracking-wider">
                  {details.status}
                </td>
                <td className="py-3">
                  <Progress value={details.completion} />
                </td>
                <td>
                  <BsThreeDotsVertical className="text-white size-6" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projects