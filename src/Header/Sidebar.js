import React, { useState, useEffect } from 'react';
import WebIcon from '@material-ui/icons/Web';
import './Sidebar.css';
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import AppsIcon from '@material-ui/icons/Apps';
import ComputerIcon from '@material-ui/icons/Computer';
import SubjectIcon from '@material-ui/icons/Subject';
import StarsIcon from '@material-ui/icons/Stars';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import { Link, useHistory } from 'react-router-dom';

function Sidebar() {
    const history = useHistory();

    const [loginString, setLoginString] = useState('');

    useEffect(() => {
        const jwtToken = sessionStorage.getItem("jwt");
        if(jwtToken != null){
            setLoginString('Logout');
        }
        else{
            setLoginString('Login');
        }
    }, [])

    const loginlogout = (inOrOut) => {
        if(inOrOut == 'Login'){
            history.push('/login');
        }
        else{
            sessionStorage.removeItem('jwt');
            history.push('/');
            setLoginString('Login');
        }
    }

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
            
            <Link to="/about">
                <div className="sidebarOption">
                    <InfoIcon/>
                    <span>ABOUT</span>
                </div>
            </Link>
            
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
            <Link to="/projectInfo">
                <div className="sidebarOption">
                    <FeaturedVideoIcon/>
                    <span>Story</span>
                </div>
            </Link>
            <Link onClick={() => loginlogout(loginString)}>
                <div className="sidebarOption">
                    {
                        loginString == 'Login' ? (
                            <LockOpenIcon/>
                        ) : (
                            <LockIcon/>
                        )
                    }
                    <span>{loginString}</span>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
