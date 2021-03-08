import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({backStyle}) {
    const [headerBackStyle, setHeaderBackStyle] = useState('header');
    useEffect(() => {
        if(!backStyle){
            setHeaderBackStyle('header backBlack');
        }
    }, [headerBackStyle])

    return (
        <div className={headerBackStyle}>
            <Link to="/">
                <div className="home_text">
                    My First Project Using React + Spring
                </div>
            </Link>
            
            <div className="header_link">
                <Link to="/">
                    <div className="header_link_option">
                        <span className="headerText">
                            HomePage
                        </span>
                    </div>
                </Link>
                <Link to="/about">
                    <div className="header_link_option">
                        <span className="headerText">
                            About me
                        </span>
                    </div>
                </Link>
                <Link to="/courses">
                    <div className="header_link_option">
                        <span className="headerText">
                            Courses Taken
                        </span>
                    </div>
                </Link>
                <Link to="/projects">
                    <div className="header_link_option">
                        <span className="headerText">
                            Some Projects
                        </span>
                    </div>
                </Link>
                
                <div className="header_link_option">
                    <span className="headerText">
                        Login
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
