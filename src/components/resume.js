import React from "react";
import File from "../file/Sarvagn_Pathak_Resume.pdf";
import { MdOutlineFileDownload } from "react-icons/md";

const Resume = () => {
  return (
    <div>
      My Resume:
      <a href={File} download={"Sarvagn_Pathak_Resume"} target="_blank" rel="noreferrer">
        <MdOutlineFileDownload />
      </a>
    </div>
  );
};

export default Resume;
