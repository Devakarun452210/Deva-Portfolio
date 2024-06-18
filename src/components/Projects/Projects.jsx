// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { projects } from "../../data"; // Import your projects array from data.js
import "./Projects.css";

const ProjectTabs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(8);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setVisibleProjects(8); // Reset visible projects when category changes
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 8);
  };

  const viewLessProjects = () => {
    setVisibleProjects(8);
  };

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.cat === activeCategory
  );

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

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
        {displayedProjects.map((project) => (
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

      {visibleProjects < filteredProjects.length ? (
        <button className="viewMoreButton" onClick={loadMoreProjects}>
          View More
        </button>
      ) : (
        filteredProjects.length > 8 && (
          <button className="viewMoreButton" onClick={viewLessProjects}>
            View Less
          </button>
        )
      )}
    </div>
  );
};

export default ProjectTabs;
