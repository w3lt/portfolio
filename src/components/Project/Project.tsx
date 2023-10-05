import React from "react";
import "./Project.css";
import { useParams } from "react-router-dom";

function Project() {

    const { projectName } = useParams();

    return <div className="project-details">

    </div>
}

export default Project;