import React from "react";
import { FaGithub, FaYoutube } from "react-icons/fa6";

const Project = ({ name, desc, link, YtLink }) => {
  return (
    <div className="project-box">
      <h3>{name}</h3>
      <div className="desc">
        <p>{desc}</p>
      </div>
      <div className="link">
        {link && (
          <a href={link}>
            <FaGithub />
          </a>
        )}
        {YtLink && (
          <a href={YtLink}>
            <FaYoutube />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="projects">
        <Project
          name={"Price-Comparison website"}
          desc={
            <ul>
              <li>Developed with flask based on python.</li>
              <li>Team leader of size 10.</li>
              <li>Created a web scrapper to get best price for any porduct.</li>
              <li>Contributed in management, developement and testing.</li>
            </ul>
          }
          link={"https://github.com/sdpathak24/price-comparison"}
          YtLink={"https://www.youtube.com/watch?v=izb1ylKzZi0"}
        />
        <Project
          name={"Blockchain Voting System"}
          desc={
            <ul>
              <li>Created during National level Hackathon - Hack Infinity organized by DCEI.</li>
              <li>Developed a decentralized voting system using blockchain technology.</li>
              <li>Ranked 2nd out of 62 teams.</li>
              <li>Contributed as front end developer.</li>
            </ul>
          }
          link={"https://github.com/harshvadi07/blockchain-voting-system"}
        />
        <Project
          name={"Digital Verification System"}
          desc={
            "Digital verification system using photo analysis and input using various cryptographic methods like salting and hashing."
          }
        />
        <Project
          name={"Video Streaming with RTSP and RTP"}
          desc={"Video streaming using Real-time streaming protocol and Real-time transfer protocol"}
          YtLink={"https://www.youtube.com/watch?v=lpj6hh1LWZ0"}
        />
      </div>
    </div>
  );
};

export default Projects;
