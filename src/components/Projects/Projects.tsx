import React, { useState } from "react";
import data from "../../projects.json";
import "./Projects.css";

import ProjectComponent from "./ProjectComponent/ProjectComponent";

interface props {
    setIsInPage: React.Dispatch<React.SetStateAction<number>>,
    setIsInProject: React.Dispatch<React.SetStateAction<number>>
}

function Projects({ setIsInPage, setIsInProject }: props) {
    const [widthLessThan1136px, setWidthLessThan1136px] = useState(window.innerWidth <= 1136);

    useState(() => {
        window.addEventListener('resize', () => {
            setWidthLessThan1136px(window.innerWidth <= 1136);
        })
    })



    return <div className="projects-container">
        <div className="projects">
            {data.projects.map((project, index) => (
                <ProjectComponent project={project} widthLessThan1136px={widthLessThan1136px} setIsInPage={setIsInPage} setIsInProject={setIsInProject} index={index} key={index} />
            ))}
        </div>
    </div>
}

export default Projects;