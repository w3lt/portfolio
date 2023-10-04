import React, { useEffect } from "react";

import "./Dashboard.css";
import avatar from "../../assets/avatar.png";

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <div className="bio-info">
                <div className="bio-title-container">
                    <div className="bio-title">I am Duy</div>
                </div>
                <div className="specialize" style={{fontSize: "4rem"}}>Full-stack Developer</div>
                <div className="signature">On my way to become a great technician</div>
            </div>   
        </div>
    )
}

export default Dashboard;