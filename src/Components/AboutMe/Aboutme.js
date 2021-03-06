import React, { useState, useEffect } from 'react';
import './Aboutme.css';
import HomeIcon from '@material-ui/icons/Home';
import Chronology from './Chronology';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Aboutme() {
    const [ tranOpacity, setTranOpacity ] = useState('');
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTranOpacity('appearOpacity');
        }, 200);
        return () => clearInterval(interval);
    }, [])
    return (
        <div className="aboutPage">
            <div className="aboutContainer">
                <h1>SELF INTRODUCTION</h1>
                <div className="titleLayer">
                    <img id="myPhoto" src="./Images/AboutMe/PictureOfMe.png" alt=""/>
                    <div className="aboutName">
                        <span>Jiwook Byun</span>
                    </div>
                    <div className={`aboutCity ${tranOpacity}`}>
                        <div className="aboutIcon">
                            <HomeIcon/>
                        </div>
                        <div className="aboutInformation">
                            Republic of Korea
                        </div>
                    </div>
                    <div className={`aboutPhone ${tranOpacity}`}>
                        <div className="aboutIcon">
                            <PhoneAndroidIcon/>
                        </div>
                        <div className="aboutInformation">
                            010-xxxx-xxxx
                        </div>
                    </div>
                    <div className={`aboutEmail ${tranOpacity}`}>
                        <div className="aboutIcon">
                            <MailOutlineIcon/>
                        </div>
                        <div className="aboutInformation">
                            xxxx@xxxx.com
                        </div>
                    </div>
                </div>
            </div>
            <div className="chronologyContainer">
                <Chronology year='~ 2009' circleColor='#3498DB'/>
                <Chronology year='2010 ~ 2012' circleColor='#990000'/>
                <Chronology year='2012 ~ 2014' circleColor='#4b5320'/>
                <Chronology year='2014 ~ 2018' circleColor='#F7DC6F'/>
                <Chronology year='2019 ~' circleColor='#C39BD3'/>
            </div>
        </div>
    )
}

export default Aboutme
