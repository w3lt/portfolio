import React, { useState } from "react";
import "./ProjectComponent.css";

import nextBannerSymbol from "../../../assets/next_banner.png";
import previousBannerSymbol from "../../../assets/previous_banner.png";

interface props {
    project: {
        demo: string,
        name: string,
        description: string,
        technologies: string[],
        sourceCode: string,
        state: string,
        type: string
    },
    widthLessThan1136px: boolean,
    setIsInPage: React.Dispatch<React.SetStateAction<number>>,
    setIsInProject: React.Dispatch<React.SetStateAction<number>>,
    index: number
}



function ProjectComponent({project, widthLessThan1136px, setIsInPage, setIsInProject, index}: props) {
    var demoImgContext: __WebpackModuleApi.RequireContext | null = null;

    switch (project.name) {
        case 'Wibu Store':
            demoImgContext = require.context("../../../assets/projects/wibu-store/", false, /\.(jpg|jpeg|png)$/);
            break;
        case 'Messenger Clone':
            demoImgContext = require.context("../../../assets/projects/my-messenger/", false, /\.(jpg|jpeg|png)$/);
            break;
        case 'Multi-player game programming project':
            demoImgContext = require.context("", false, /\.(jpg|jpeg|png)$/);
            break;
    } 

    const demoImgPath = demoImgContext?.keys().map(demoImgContext);
    const demoImgs = demoImgPath?.every(item => typeof item === 'string') ? demoImgPath as string[] : [];


    const [currentIdx, setCurrentIdx] = useState(0);


    return <div className="project">
        <div className="demo-img">
            <div className={`navigate-btn previous-btn ${currentIdx === 0 ? "disabled" : ""}`} onClick={() => setCurrentIdx(previous => previous-1)}>
                <img src={previousBannerSymbol} alt="" />
            </div>

            {demoImgs.length !== 0 && <img src={demoImgs[currentIdx]} alt="" />}

            <div className={`navigate-btn next-btn ${(demoImgs.length === 0 || currentIdx === demoImgs.length-1) ? "disabled" : ""}`} onClick={() => setCurrentIdx(previous => previous+1)}>
                <img src={nextBannerSymbol} alt="" />
            </div>
        </div>
        {widthLessThan1136px ? <div className="info">
            <div className="name">{project.name} <span className={`state ${project.state.toLocaleLowerCase().replace(' ', '-')}`}>{project.state}</span></div>
            <div className={`more state ${project.state.toLocaleLowerCase().replace(' ', '-')}`} onClick={() => {setIsInPage(3); setIsInProject(index);}}>More...</div>
        </div> :
        <div className="info">
            <div className="name">{project.name} <span className={`state ${project.state.toLocaleLowerCase().replace(' ', '-')}`}>{project.state}</span></div>
            <div className="description">{project.description}</div>
            <div className="technologies">
                {project.technologies.map((technology, index) => (
                    <div key={index} className="technology">{technology}</div>
                ))}
            </div>
            <div className="more-source-code">
                <span className={`more state ${project.state.toLocaleLowerCase().replace(' ', '-')}`} onClick={() => {setIsInPage(3); setIsInProject(index);}}>More...</span>
                <span className="source-code" onClick={() => {window.location.href = project.sourceCode}}>Source Code</span>
            </div>
        </div>}
    </div>
}

export default ProjectComponent;