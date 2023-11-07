import React, { useState } from "react";
import "./Project.css";

import ReactMarkdown from 'react-markdown';

import data from "../../projects.json";
import details from "../../details.json";

import nextBannerSymbol from "../../assets/next_banner.png";
import previousBannerSymbol from "../../assets/previous_banner.png";

function Project({ index }: {index: number}) {
    const projectData = data.projects[index];
    const projectDetails = details.details[index];

    var demoImgContext: __WebpackModuleApi.RequireContext | null = null;

    switch (projectData.name) {
        case 'Wibu Store':
            demoImgContext = require.context("../../assets/projects/wibu-store/", false, /\.(jpg|jpeg|png)$/);
            break;
        case 'Messenger Clone':
            demoImgContext = require.context("../../assets/projects/my-messenger/", false, /\.(jpg|jpeg|png)$/);
            break;
        case 'Multi-player game programming project':
            demoImgContext = require.context("", false, /\.(jpg|jpeg|png)$/);
            break;
    } 

    const demoImgPath = demoImgContext?.keys().map(demoImgContext);
    const demoImgs = demoImgPath?.every(item => typeof item === 'string') ? demoImgPath as string[] : [];
    const [currentIdx, setCurrentIdx] = useState(0);

    return <div className="project-details">
        <div className="title">
            <div onClick={() => {window.location.href = projectData.sourceCode}}>{projectData.name}</div>
            <div>{projectData.description}</div>
        </div>
        <div className="content">
            <div className="demo-img">
                <div className={`navigate-btn previous-btn ${currentIdx === 0 ? "disabled" : ""}`} onClick={() => setCurrentIdx(previous => previous-1)}>
                    <img src={previousBannerSymbol} alt="" />
                </div>

                {demoImgs.length !== 0 && <img src={demoImgs[currentIdx]} alt="" />}

                <div className={`navigate-btn next-btn ${(demoImgs.length === 0 || currentIdx === demoImgs.length-1) ? "disabled" : ""}`} onClick={() => setCurrentIdx(previous => previous+1)}>
                    <img src={nextBannerSymbol} alt="" />
                </div>
            </div>

            <div className="info">
                <div className="description">{projectDetails.about}</div>
                <div className="tech">
                    <div className="title">Technologies using:</div>
                    {projectDetails.technologies.language.length !== 0 && <div className="languages tech">
                        <div>Languages:</div>
                        <div>
                            {projectDetails.technologies.language.map((lang, index) => {
                                return <span key={index}>{lang}</span>
                            })}
                        </div>
                    </div>}

                    {projectDetails.technologies.framework.length !== 0 && <div className="frameworks tech">
                        <div>Frameworks:</div>
                        <div>
                            {projectDetails.technologies.framework.map((framework, index) => {
                                return <span key={index}>{framework}</span>
                            })}
                        </div>
                    </div>}

                    {projectDetails.technologies.other.length !== 0 && <div className="others tech">
                        <div>Other:</div>
                        <div>
                            {projectDetails.technologies.other.map((other, index) => {
                                return <span key={index}>{other}</span>
                            })}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    </div>
}

export default Project;