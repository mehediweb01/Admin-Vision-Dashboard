import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const SatisfactionRate = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-black/70 to-blue-400 p-4 rounded-md shadow-inner shadow-sky-300 h-[280px]">
      <div className="w-full text-start">
        <h2 className="text-lg font-semibold text-white/95">
          Satisfaction Rate
        </h2>
        <p className="text-sm text-gray-400">From all projects</p>
      </div>
      <div className="relative flex items-center justify-center mt-4">
        <CircularProgress
          variant="determinate"
          value={progress}
          size={90}
          thickness={4}
          sx={{ color: "#2D8CFF" }}
        />
        <div className="absolute flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-full">
            😊
          </div>
        </div>
      </div>
      <div className="mt-4 bg-gradient-to-b from-sky-400 to-white p-2 rounded-lg w-[80%] mx-auto text-center flex justify-between items-start gap-2 ">
        <p className="text-xs text-gray-600 font-serif font-thin">0%</p>
        <div>
          <p className="text-2xl font-bold">{percentage}%</p>
          <p className="text-sm text-sky-600">Based on likes</p>
        </div>
        <p className="text-xs text-gray-600 font-serif font-thin">100%</p>
      </div>
    </div>
  );
};

export default SatisfactionRate;
