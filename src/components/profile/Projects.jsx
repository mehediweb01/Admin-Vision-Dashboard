import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProject(data.projectData));
  }, [project]);
  return (
    <div className="bg-gradient-to-bl from-white/20 via-black/40 to-sky-400/40 px-4 py-6 rounded-md shadow-md shadow-black">
      <div>
        <h1 className="font-bold text-xl text-white font-serif">Project</h1>
        <p className="font-thin font-serif text-slate-300 text-sm">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {project.map((items) => (
          <ProjectCard key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
