import React from "react";
import GridProjects from "./GridProjects";
import projectsData from "./../projectsData";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-10">Projects</h1>
      <h2 className="mt-4 text-lg font-semibold text-gray-600">
        Explore our stunning projects
      </h2>
      <div>
        <GridProjects category={"Kitchen"} images={projectsData.kitchen} />
        <GridProjects category={"Living Room"} images={projectsData.livingRoom} />
        <GridProjects category={"Bedroom"} images={projectsData.bedroom} />
        <GridProjects category={"Bathroom"} images={projectsData.bathroom} />
        <GridProjects category={"Kids Room"} images={projectsData.kidsRoom} />
      </div>
    </div>
  );
};

export default Projects;
