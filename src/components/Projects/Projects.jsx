// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { projects } from "../../data"; // Import your projects array from data.js
import "./Projects.css";

const ProjectTabs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const changeCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.cat === activeCategory
  );

  return (
    <div className="container">
      <div className="title">MY PROJECTS</div>
      <div className="tabs">
        <button
          onClick={() => changeCategory("All")}
          className={activeCategory === "All" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => changeCategory("Frontend")}
          className={activeCategory === "Frontend" ? "active" : ""}
        >
          Frontend
        </button>
        <button
          onClick={() => changeCategory("UI/UX")}
          className={activeCategory === "UI/UX" ? "active" : ""}
        >
          UI/UX
        </button>
        {/* Add more buttons for other categories if needed */}
      </div>

      <div className="projects">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project">
            <img className="projectImg" src={project.img} alt={project.title} />
            <div className="content">
              <p className="categoryName">{project.cat}</p>
              <h3 className="projectTitle">{project.title}</h3>
              <p className="description">{project.desc}</p>
              {/* <a
                className="projectLink"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTabs;
