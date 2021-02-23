import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="home_text">
                My First Project Using React + Spring
            </div>
            <div className="header_link">
                <div className="header_link_option">
                    <span className="headerText">
                        HomePage
                    </span>
                </div>
                <div className="header_link_option">
                    <span className="headerText">
                        About me
                    </span>
                </div>
                <div className="header_link_option">
                    <span className="headerText">
                        Courses Taken
                    </span>
                </div>
                <div className="header_link_option">
                    <span className="headerText">
                        Some Projects
                    </span>
                </div>
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
