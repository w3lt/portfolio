import React, { useState } from "react";
import "./Header.css";

function Header() {

    const scrollToSection = (section: string) => {
        // Get a reference to the About section element
        const aboutSection = document.querySelector(`.${section}`);
    
        // Scroll to the About section smoothly
        if (aboutSection !== null) aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const [isInTag, setIsInTag] = useState(-1);

    console.log(isInTag);
    

    const contacts: {platform: string, link: string}[] = [
        {platform: "Discord", link: "https://discordapp.com/users/866989139195199508"},
        {platform: "LinkedIn", link: "https://www.linkedin.com/in/tien-duy-pham-603022191/"},
        {platform: "Github", link: "https://github.com/riverlis"}
    ]

    return <div className="header-container">
        <div className="my-name" onClick={() => {window.location.href = "/portfolio";}}>
            Pham Tien Duy
            <span />
        </div>
        <div className="header-tags">
            {["About", "Projects", "Contact"].map((tagName, index) => (
                <div className={`tag ${isInTag === index ? "is-in" : ""}`} key={index} onClick={() => scrollToSection(tagName.toLocaleLowerCase())}>
                    {tagName}
                    <span />
                </div>
            ))}

            {(isInTag === 2) && <div className="contacts-drop-box">
                {contacts.map((contact, index) => (
                    <div className="contact" key={index} onClick={() => {window.location.href = contact.link}}>{contact.platform}</div>
                ))}
            </div>}
        </div>             
    </div>
}

export default Header;