import React, { useState } from "react";
import "./Projects.css";

import nextBannerSymbol from "../../assets/next_banner.png";
import previousBannerSymbol from "../../assets/previous_banner.png";

const WibuStoreDemoContext = require.context("../../assets/projects/wibu-store/", false, /\.(jpg|jpeg|png)$/);
const WibuStoreDemoImagePaths = WibuStoreDemoContext.keys().map(WibuStoreDemoContext);

const MyMessengerDemoContext = require.context("../../assets/projects/my-messenger/", false, /\.(jpg|jpeg|png)$/);
const MyMessengerDemoImagePaths = MyMessengerDemoContext.keys().map(MyMessengerDemoContext);

function Projects() {

    type State = {
        "in progress": 0,
        "completed": 1
    }

    class Project {
        constructor(public demoImage: string[], public name: string, 
                    public description: string, public technologies: string[], 
                    public production: string, public sourceCode: string,
                    public state: keyof State,
                    private currentDemoIndex: number,
                    public setCurrentDemoIndex: React.Dispatch<React.SetStateAction<number>>) {
                    };

        getCurrentIndex() {
            return this.currentDemoIndex;
        }
    }

    const myProjects: Project[] = [
        new Project(
            WibuStoreDemoImagePaths.every(item => typeof item === "string") ? WibuStoreDemoImagePaths as string[] : [],
            "Wibu Store",
            "A game selling store dedicated for wibu game",
            ["JavaScript", "Nodejs", "MySQL", "React", "HTML & CSS"],
            "",
            "https://github.com/riverlis/Wibu-Store",
            "in progress",
            ...useState(0),
        ),
        new Project(
            MyMessengerDemoImagePaths.every(item => typeof item === "string") ? MyMessengerDemoImagePaths as string[] : [],
            "My Messenger",
            "A clone app of Meta's messenger",
            ["JavaScript", "Nodejs", "MongoDB", "React", "HTML & CSS"],
            "",
            "https://github.com/riverlis/my-messenger/tree/silver",
            "in progress",
            ...useState(0)
        ),
        new Project(
            [],
            "Learning Web",
            "A website dedicated for learning and teaching english",
            ["JavaScript", "Nodejs", "MongoDB", "React", "HTML & CSS"],
            "",
            "https://github.com/riverlis/Learning-Web/tree/silver",
            "in progress",
            ...useState(0)
        )
    ]


    const [widthLessThan1136px, setWidthLessThan1136px] = useState(window.innerWidth <= 1136);

    useState(() => {
        window.addEventListener('resize', () => {
            setWidthLessThan1136px(window.innerWidth <= 1136);
        })
    })



    return <div className="projects-container">
        <div className="projects">
            {myProjects.map((project, index) => (
                <div key={index} className="project">
                    <div className="demo-img">
                        <div className={`navigate-btn previous-btn ${project.getCurrentIndex() === 0 ? "disabled" : ""}`} onClick={() => project.setCurrentDemoIndex(previous => previous-1)}>
                            <img src={previousBannerSymbol} alt="" />
                        </div>

                        {project.demoImage.length !== 0 && <img src={project.demoImage[project.getCurrentIndex()]} alt="" />}

                        <div className={`navigate-btn next-btn ${(project.demoImage.length === 0 || project.getCurrentIndex() === project.demoImage.length-1) ? "disabled" : ""}`} onClick={() => project.setCurrentDemoIndex(previous => previous+1)}>
                            <img src={nextBannerSymbol} alt="" />
                        </div>
                    </div>
                    {widthLessThan1136px ? <div className="info">
                        <div className="name">{project.name} <span className="state">{project.state}</span></div>
                        <div className="more" onClick={() => {window.location.href = `/project/${project.name.toLocaleLowerCase().replace(" ", "-")}`}}>More...</div>
                    </div> :
                    <div className="info">
                        <div className="name">{project.name} <span className="state">{project.state}</span></div>
                        <div className="description">{project.description}</div>
                        <div className="technologies">
                            {project.technologies.map((technology, index) => (
                                <div key={index} className="technology">{technology}</div>
                            ))}
                        </div>
                        <div className="website-source-code">
                            <span className={`website ${project.production.length === 0 ? "disabled" : ""}`} onClick={() => {window.location.href = project.production}}>Website</span>
                            <span className="source-code" onClick={() => {window.location.href = project.sourceCode}}>Source Code</span>
                        </div>
                        <div className="more" onClick={() => {window.location.href = `/project/${project.name.toLocaleLowerCase().replace(" ", "-")}`}}>More about project...</div>
                    </div>}
                    
                </div>
            ))}
        </div>
    </div>
}

export default Projects;