import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    Image: "/Images/zomato.png",
    title: "Zomato Replica",
    Description: "Food Ordering website",
  },
  {
    id: 2,
    Image: "/Images/chromeextension.png",
    title: "Chrome web extension",
    Description: "Shorcut for Creating clusters",
  },
  {
    id: 3,
    Image: "/Images/PriceReport.png",
    title: "Price Report Tool",
    Description: "For creating the price reports",
  },
];
const ProjectSection = () => {
  return (
    <>
    
      <h2  className="text-center text-4xl font-bold text-white mt-4"> My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 md:gap-12">


      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.Description}
          imgUrl={project.Image}
        />
      ))}
      </div>
 
    </>
  );
};

export default ProjectSection;
