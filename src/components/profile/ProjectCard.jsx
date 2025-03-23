import { Button } from "@mui/material";
import React from "react";

const ProjectCard = ({ img, projectCount, name, description, label }) => {
  return (
    <div className="h-full shadow-md shadow-white px-2 py-4 rounded-2xl my-3">
      <img src={img} alt={name} className="w-[300px] rounded-md" />
      <div className="mt-3">
        <div>
          <h3 className="font-serif font-medium text-white/70 text-sm">
            {projectCount}
          </h3>
          <h1 className="font-serif font-bold text-xl text-white tracking-wider">
            {name}
          </h1>
          <div className="my-2">
            <p className="text-white/50 text-sm ">{description}</p>
          </div>
        </div>
        <div className="mt-4">
          <Button
            variant="outlined"
            sx={{
              borderRadius: 3,
              boxShadow: "0 1px 2px 0.6px black",
              color: "white",
            }}
          >
            {label}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
