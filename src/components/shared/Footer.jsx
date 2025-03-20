import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setLinks(data.links));
  }, []);
  return (
    <footer className="flex sm:flex-row flex-col justify-center sm:justify-between items-center gap-2 border-t border-slate-400 rounded-md py-2 px-2 shadow-sm shadow-black">
      <div>
        <p className="text-white md:text-gray-600 text-sm font-medium tracking-[2px]">
          @ {new Date().getFullYear()}, All rights reserved.
        </p>
      </div>
      <div className="space-x-3 mr-8">
        {links.map((list, i) => (
          <Link
            to={list.href}
            key={i}
            className="text-white sm:text-gray-400 font-semibold tracking-wider"
          >
            {list.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
