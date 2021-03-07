import React from 'react';
import './Aboutme.css';
import HomeIcon from '@material-ui/icons/Home';
import Chronology from './Chronology';

function Aboutme() {
    return (
        <div className="aboutPage">
            <div className="aboutContainer">
                <h1>SELF INTRODUCTION</h1>
                <div className="titleLayer">
                    <img id="myPhoto" src="./Images/AboutMe/me.PNG" alt=""/>
                    <div className="aboutName">
                        <span>Jiwook Byun</span>
                    </div>
                    <div className="aboutCity">
                        <div className="aboutIcon">
                            <HomeIcon/>
                        </div>
                        <div className="aboutInformation">
                            Republic of Korea
                        </div>
                    </div>
                    <div className="aboutPhone">
                        <div className="aboutIcon">
                            <HomeIcon/>
                        </div>
                        <div className="aboutInformation">
                            010-xxxx-xxxx
                        </div>
                    </div>
                    <div className="aboutEmail">
                        <div className="aboutIcon">
                            <HomeIcon/>
                        </div>
                        <div className="aboutInformation">
                            xxxx@xxxx.com
                        </div>
                    </div>
                </div>
            </div>
            <div className="chronologyContainer">
                <Chronology/>
            </div>
        </div>
    )
}

export default Aboutme
