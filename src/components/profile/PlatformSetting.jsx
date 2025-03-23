import { Switch } from "@mui/material";
import React from "react";

const PlatformSetting = () => {
  return (
    <div className="bg-gradient-to-bl from-white/40 via-black/60 to-sky-400/80 px-4 py-6 rounded-md shadow-md shadow-black">
      <h1 className="font-bold font-serif text-xl leading-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500/60">
        Platform Setting
      </h1>
      <div className="mt-4">
        <h1 className="uppercase text-white/70 font-bold font-serif ">
          account
        </h1>
        <div>
          <div className="flex items-center ">
            <Switch color="warning" />
            <p className="text-white/80 text-base lg:text-xs ">
              Email me when someone follows me
            </p>
          </div>
          <div className="flex items-center ">
            <Switch defaultChecked color="warning" />
            <p className="text-white/80 text-base lg:text-xs  ">
              Email me when someone mentions me
            </p>
          </div>
          <div className="flex items-center ">
            <Switch color="warning" />
            <p className="text-white/80 text-base lg:text-xs  ">
              Email me when someone mentions me
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="uppercase text-white/70 font-bold font-serif ">
          application
        </h1>
        <div>
          <div className="flex items-center ">
            <Switch color="warning" />
            <p className="text-white/80 text-base lg:text-xs ">
              New launches & projects
            </p>
          </div>
          <div className="flex items-center ">
            <Switch defaultChecked color="warning" />
            <p className="text-white/80 text-base lg:text-xs ">
              Monthly product update
            </p>
          </div>
          <div className="flex items-center ">
            <Switch color="warning" />
            <p className="text-white/80 text-base lg:text-xs ">
              Yearly product updates
            </p>
          </div>
          <div className="flex items-center ">
            <Switch color="warning" defaultChecked />
            <p className="text-white/80 text-base lg:text-xs ">
              permanent product updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSetting;
