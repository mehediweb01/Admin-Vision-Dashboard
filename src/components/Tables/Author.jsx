import React, { useEffect, useState } from "react";

function Author() {
  const [authorData, setAuthorData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAuthorData(data.authorData));
  }, [authorData]);
  return (
    <div className="bg-gradient-to-r from-blue-600/40 to-black/60 px-4 py-6 rounded-2xl">
      <h1 className="text-2xl text-white">Authors Table</h1>
      <div>
        <div className="md:block hidden overflow-x-auto my-4">
          <table className="min-w-full table-auto border-collapse text-start">
            <thead>
              <tr className="border-b border-amber-400">
                {["AUTHOR", "FUNCTION", "STATUS", "EMPLOYED"].map((heading) => (
                  <th
                    key={heading}
                    className="px-2 py-3 text-start text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-900/10 tracking-[1px] whitespace-nowrap"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorData.map((details) => (
                <tr key={details.id} className="border-b border-amber-200">
                  <td className="text-white text-xl font-medium font-serif">
                    <div className="flex gap-1 items-center">
                      <img
                        src={details.img}
                        alt={details.name}
                        className="w-10 h-10 rounded-lg"
                      />
                      <div>
                        <h1>{details.name}</h1>
                        <p className="text-sm text-white/50">{details.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-white">
                    <h1>{details.job}</h1>
                    <p className="text-white/50">{details.possition}</p>
                  </td>
                  <td>
                    <p
                      className={`text-base tracking-wider rounded-md py-2 text-center w-[70%] lg:w-[55%] font-semibold ${
                        details.status === "Online"
                          ? "bg-green-400 text-slate-900"
                          : "bg-transparent border border-white text-white"
                      }`}
                    >
                      {details.status}
                    </p>
                  </td>
                  <td className=" text-white">
                    <p>{details.employed}</p>
                  </td>
                  <td>
                    <p className="text-white/60">{details.edit}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* mobile device table */}
      <div className="block md:hidden my-4 space-y-4">
        {authorData.map((details) => (
          <div
            key={details.id}
            className="bg-amber-900/30 p-4 rounded-lg shadow-lg text-white my-2"
          >
            <div className="flex items-center gap-3">
              <img
                src={details.img}
                alt={details.name}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-lg font-medium">{details.name}</h1>
                <p className="text-sm text-white/50">{details.email}</p>
              </div>
            </div>
            <div className="mt-3">
              <h2 className="font-semibold">{details.job}</h2>
              <p className="text-white/50">{details.possition}</p>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-sm">Employed: {details.employed}</p>
              <span
                className={`px-3 py-1 rounded-full text-sm tracking-wide ${
                  details.status === "Online"
                    ? "bg-green-400 text-black"
                    : "bg-gray-600"
                }`}
              >
                {details.status}
              </span>
            </div>
            <p className="text-right text-white/60 text-sm mt-2">
              {details.edit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Author;
