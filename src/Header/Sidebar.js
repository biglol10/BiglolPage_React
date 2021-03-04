import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import './Sidebar.css';
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import AppsIcon from '@material-ui/icons/Apps';
import ComputerIcon from '@material-ui/icons/Computer';
import SubjectIcon from '@material-ui/icons/Subject';
import StarsIcon from '@material-ui/icons/Stars';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/">
                <div className="sidebarOption_logo">
                    <img src='./Images/Home/SidebarLogo.png'/>
                </div>
            </Link>
            
            <Link to="/">
                <div className="sidebarOption">
                    <HomeIcon/>
                    <span>HOME</span>
                </div>
            </Link>
            
            <div className="sidebarOption">
                <InfoIcon/>
                <span>ABOUT</span>
            </div>
            <Link to="/skills">
                <div className="sidebarOption">
                    <StarsIcon/>
                    <span>SKILLS</span>
                </div>
            </Link>
            <Link to="/courses">
                <div className="sidebarOption">
                    <SubjectIcon/>
                    <span>COURSES</span>
                </div>
            </Link>
            <Link to="/projects">
                <div className="sidebarOption">
                    <AssignmentIcon/>
                    <span>CLONE / PROJECTS</span>
                </div>
            </Link>
            
        </div>
    )
}

export default Sidebar
