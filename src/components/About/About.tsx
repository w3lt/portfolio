import React from "react";
import "./About.css";


// import skill images
import javascript_img from "../../assets/skills/javasript.png";
import typescript_img from "../../assets/skills/typescript.png";
import nodejs_img from "../../assets/skills/nodejs.png";
import react_img from "../../assets/skills/react.png";
import mongodb_img from "../../assets/skills/mongodb.png";
import python_img from "../../assets/skills/python.png";
import java_img from "../../assets/skills/java.png";
import html_img from "../../assets/skills/html.png";
import css_img from "../../assets/skills/css.png";
import mysql_img from "../../assets/skills/mysql.png";
import swift_img from "../../assets/skills/swift.png";
import r_img from "../../assets/skills/r.png";
import springboot_img from "../../assets/skills/springboot.png";
import docker_img from "../../assets/skills/docker.png";
import git_img from "../../assets/skills/git.png";

// import educations images
import quoc_hoc_hue_logo from "../../assets/educations/quoc_hoc_hue_logo.png";
import insa_cvl_logo from "../../assets/educations/insa-cvl_logo.png";

// react-tooltip
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';


function About() {

    enum Proficiency {
        "Beginner" = 0,
        "Intermediate" = 1,
        "Upper Intermediate" = 2,
        "Advanced" = 3,
        "Upper Advanced" = 4,
        "Expert" = 5
    };

    class Skill {
        public name: string;
        public image: string;
        public proficiency: string;
        // public description: string;
        constructor(name: string, image: string, proficiency: string) {
            this.name = name;
            this.image = image;
            this.proficiency = proficiency;
            // this.description = description;
        };
    }

    const mySkills = [
        new Skill("Python", python_img, Proficiency[4]),
        new Skill("JavaScript", javascript_img, Proficiency[3]),
        new Skill("CSS", css_img, Proficiency[3]),
        new Skill("Git", git_img, Proficiency[3]),
        new Skill("React", react_img, Proficiency[2]),
        new Skill("MySQL", mysql_img, Proficiency[2]),
        new Skill("Docker", docker_img, Proficiency[2]),
        new Skill("R", r_img, Proficiency[2]),
        new Skill("TypeScript", typescript_img, Proficiency[1]),
        new Skill("Node.js", nodejs_img, Proficiency[1]),
        new Skill("MongoDB", mongodb_img, Proficiency[1]),
        new Skill("Java", java_img, Proficiency[1]),
        new Skill("HTML", html_img, Proficiency[1]),
        new Skill("Swift", swift_img, Proficiency[1]),
        new Skill("Spring Boot", springboot_img, Proficiency[1]),
    ];

    class Education {
        public schoolName: string;
        public logo: string;
        public degree: string;
        public studyField: string
        private startDate: Date;
        private endDate: Date;
        public activities: string[];

        constructor(schoolName: string, logo: string, degree: string, studyField: string, startDate: Date, endDate: Date, activities: string[]) {
            this.schoolName = schoolName;
            this.logo = logo;
            this.degree = degree;
            this.studyField = studyField;
            this.startDate = startDate;
            this.endDate = endDate;
            this.activities = activities;
        }

        getDateString(option: 'start' | 'end') {
            if (option === 'start') {
                return this.startDate.toLocaleDateString('en-us', {month: 'short', year: 'numeric'});
            } else if (option === 'end') {
                return this.endDate.toLocaleDateString('en-us', {month: 'short', year: 'numeric'});
            }
        }
    }

    const myEducations = [
        new Education("INSA Centre Val de Loire", insa_cvl_logo, "Master Degree", 
                    "Computer Security & Technologies", new Date(2020, 8, 1), new Date(2025, 10, 1), []),
        new Education("Quốc Học - Huế High School", quoc_hoc_hue_logo, "High School Diploma", 
                    "Mathematic Student", new Date(2017, 8, 1), new Date(2020, 6, 1), 
                    ["30-4 Olympic Gold Medal", "National Mathematic Olympic Certificate"])
    ]

    return <div className="about">
        <div className="total-info">
            <div className="title">About Me</div>
            <div className="signature">The name Pham Tien Duy (John Silver), currently student at INSA Centre Val de Loire, with a dream to become a great technician.</div>
        </div>

        <div className="skills-container">
            <div className="title">Skills</div>

            <div className="tech-skills">
                <div className="grid-container">
                    {mySkills.map((skill, index) => {
                        const className = skill.name.replace(/\W+/g, "-");
                        return <div className={`grid-item skill ${className}`} key={index}>
                            <div className="image">
                                <img src={skill.image} alt="" />
                            </div>
                            <div className="skill-name">
                                {skill.name}
                            </div>
                            <Tooltip anchorSelect={`.${className}`}>
                                <div dangerouslySetInnerHTML={{__html: `<div>
                                    <div style="font-size: 700;">Proficiency: ${skill.proficiency}</div>
                                    <div className="describe"></div>
                                </div>`}} />
                            </Tooltip>
                        </div>
                    })}
                </div>
            </div>

            <div className="soft-skills">

            </div>
        </div>

        <div className="educations-container">
            <div className="title">Educations</div>
            <div className="content">
                <div></div>
                <div>
                    {myEducations.map((education, index) => (
                        <div key={index} className="education">
                            <div className="logo">
                                <img src={education.logo} alt="" />
                            </div>
                            <div className="info">
                                <div className="school-name">{education.schoolName}</div>
                                <div>{education.degree}, {education.studyField}</div>
                                <div>{education.getDateString('start')} - {education.getDateString('end')}</div>
                                {education.activities.length !== 0 && <div className="activities">
                                    Activities & societies: {education.activities.join(", ")}
                                </div>}
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    </div>
}

export default About;