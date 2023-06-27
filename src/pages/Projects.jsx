import React, { useEffect } from "react";
import gsap from "gsap";
import GridProjects from "./GridProjects";
import projectsData from "./../projectsData";

const Projects = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
      .fromTo(
        ".text",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        ".gridProjects",
        { opacity: 0, y: 2000 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.3"
      );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-10 title">Projects</h1>
      <h2 className="mt-4 text-lg font-semibold text-gray-600 text">Explore our stunning projects</h2>
      <div className="gridProjects">
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
