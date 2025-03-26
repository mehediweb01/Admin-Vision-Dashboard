import React, { useEffect, useState } from "react";

function Author() {
  const [authorData, setAuthorData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAuthorData(data.authorData));
  }, [authorData]);
  return (
    <div className="bg-gradient-to-r from-blue-600/60 to-black/80 px-4 py-6 rounded-2xl">
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
            <tbody className="">
              {authorData.map((details) => (
                <tr key={details.id} className="border-b border-amber-200 ">
                  <td className="text-white text-xl font-medium font-serif">
                    <div className="flex gap-1 items-center">
                      <div>
                        <img
                          src={details.img}
                          alt={details.name}
                          className="w-10 h-10 rounded-lg"
                        />
                      </div>
                      <div>
                        <h1>{details.name}</h1>
                        <p className="text-sm text-white/50">{details.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="  text-white">
                    <h1>{details.job}</h1>
                    <p className="text-white/50">{details.possition}</p>
                  </td>
                  <td
                    className={`text-white/80 text-base tracking-wider rounded-3xl  ${
                      details.status === "Online"
                        ? "bg-green-400 w-9"
                        : "bg-transparent"
                    }`}
                  >
                    <p className="text-center"> {details.status}</p>
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
    </div>
  );
}

export default Author;
