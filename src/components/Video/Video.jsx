// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Video.css"; // Import your CSS file
import desktopVideo from "../../assets/video/desktop.webm";
import tabletVideo from "../../assets/video/tab.webm";
import mobileVideo from "../../assets/video/mobile.webm";

const Video = () => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const updateVideoSrc = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVideoSrc(desktopVideo);
      } else if (width >= 768) {
        setVideoSrc(tabletVideo);
      } else {
        setVideoSrc(mobileVideo);
      }
    };

    updateVideoSrc();
    window.addEventListener("resize", updateVideoSrc);

    return () => window.removeEventListener("resize", updateVideoSrc);
  }, []);

  return (
    <video className="responsive-video" src={videoSrc} muted loop autoPlay>
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
