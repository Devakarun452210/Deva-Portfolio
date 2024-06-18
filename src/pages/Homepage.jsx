// eslint-disable-next-line no-unused-vars
import React from "react";
// import Slider from "../components/Slider/Slider";
import ProjectTabs from "../components/Projects/Projects";
import Video from "../components/Video/Video";

const Homepage = () => {
  return (
    <div>
      {/* <Slider /> */}
      <div className="container">
        <Video />
      </div>
      <ProjectTabs />
    </div>
  );
};

export default Homepage;
