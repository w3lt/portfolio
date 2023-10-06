import React from "react";
import "./Footer.css";

import copyright from "../../assets/copyright.png";

function Footer() {
    return <div className="footer">
        <div style={{display: "flex", alignItems: "center"}}><img src={copyright} alt="" className="copyright" />2023 riverlis</div>
        <div style={{display: "flex", alignItems: "center"}}>Designed by <span className="designer" style={{marginLeft: "4px", color: "#96B6C5"}} onClick={() => {window.location.href = "https://www.linkedin.com/in/hương-giang-nguyễn-0a0224193/"}}>hgonthesilver</span></div>
    </div>
}

export default Footer;