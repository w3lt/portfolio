import React from "react";
import "./Projects.css";

import loadingGif from "../../assets/loading.gif";

function Projects() {
    return <div className="projects">
        <div style={{fontSize: "4rem", margin: "0 auto 100px"}}>Up Comming</div>
        <div>
            <img src={loadingGif} style={{width: "95px", height: "96px"}} alt="" />
        </div>
    </div>
}

export default Projects;