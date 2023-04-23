import React from "react";
import "./Navbar.css";
import img from "./images/steeleye.jpg"
import { Link } from "react-router-dom";

const Navbar =()=>{
    return (
        <div className="nav">
            <div className="nav-sub">
                Charandeep Singh FrontEnd
            </div>
            <div className="nav-sub2">
                <img style={{border:"4px solid black"}} src={img} alt=""></img>
            </div>
            <div className="nav-sub3">
            <Link to="/answers" style={{ textDecoration: 'none', color: "white" }}>
                Answers to Given Questions</Link>
            </div>
        </div>
    )
}

export default Navbar;