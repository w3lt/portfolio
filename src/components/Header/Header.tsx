import React, { useEffect, useState } from "react";
import "./Header.css";

import discordLogo from "../../assets/logo/discord_logo.png";
import discordHoverLogo from "../../assets/logo/discord_logo_hover.png";
import linkedinLogo from "../../assets/logo/linkedin_logo.png";
import githubLogo from "../../assets/logo/github_logo.png";
import githubHoverLogo from "../../assets/logo/github_logo_hover.png";

interface HeaderProps {
    setIsInPage: React.Dispatch<React.SetStateAction<number>>
}

function Header({ setIsInPage } : HeaderProps) {

    const [isInTag, setIsInTag] = useState(-1);

    const [isHovering, setIsHovering] = useState(-1);

    const [widthThan725px, setWidthThan725px] = useState(window.innerWidth >= 750);
    

    const contacts: {platform: string, link: string, logo: string, hoverLogo: string}[] = [
        {platform: "Discord", link: "https://discordapp.com/users/866989139195199508", logo: discordLogo, hoverLogo: discordHoverLogo},
        {platform: "Linkedin", link: "https://www.linkedin.com/in/tien-duy-pham-603022191/", logo: linkedinLogo, hoverLogo: linkedinLogo},
        {platform: "Github", link: "https://github.com/riverlis", logo: githubLogo, hoverLogo: githubHoverLogo}
    ]

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidthThan725px(window.innerWidth >= 750);
        })
    })

    return <div className="header-container">
        <div className="my-name" onClick={() => {setIsInPage(0);}}>
            {widthThan725px ? "Pham Tien Duy" : "Silver"}
            <span />
        </div>
        <div className="header-tags">
            {["About", "Projects", "Contact"].map((tagName, index) => (
                <div className={`tag ${isInTag === index ? "is-in" : ""}`} key={index} onClick={() => {
                    isInTag === index ? setIsInTag(-1) : setIsInTag(index);
                    if (index !== 2) setIsInPage(index+1);
                }}>
                    {tagName}
                    <span />
                </div>
            ))}

            {(isInTag === 2) && <div className="contacts-drop-box">
                {contacts.map((contact, index) => (
                    <div className="contact" key={index} 
                    onClick={() => {window.location.href = contact.link}}
                    onMouseEnter={() => {setIsHovering(index)}}
                    onMouseLeave={() => {setIsHovering(-1)}}>
                        <img src={isHovering !== index ? contact.logo : contact.hoverLogo} alt="" /> {contact.platform}
                    </div>
                ))}
            </div>}
        </div>             
    </div>
}

export default Header;