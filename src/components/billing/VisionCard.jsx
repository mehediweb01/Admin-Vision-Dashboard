import React from "react";
import IconSvg from "../../assets/svg/Icon";

const VisionCard = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-600/45 via-blue-400/30 to-black/70 px-5 py-3 rounded-md max-w-[400px] w-full shadow-md shadow-black">
      <div className="flex justify-between items-center gap-4">
        <p className="font-bold font-serif text-2xl text-white">Vision UI</p>
        <IconSvg />
      </div>
      <div className="mt-12">
        <h4 className="font-semibold text-xl sm:text-[24px] text-white">
          9212 8339 8823 XXXX
        </h4>
        <div className="mt-4"> 
          <h3 className=" uppercase font-bold text-white font-serif">
            valid thru
          </h3>
          <p className="font-medium text-sm text-white">
            {new Date().getMonth()}/{new Date().getDay()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionCard;
