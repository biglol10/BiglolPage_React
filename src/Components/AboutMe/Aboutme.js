import React from 'react';
import './Aboutme.css';

function Aboutme() {
    return (
        <div className="aboutPage">
            <div className="aboutContainer">
                <h1>SELF INTRODUCTION</h1>
                <div className="titleLayer">
                    <img id="myPhoto" src="./Images/AboutMe/me.PNG" alt=""/>
                    <span>
                        Jiwook Byun
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
