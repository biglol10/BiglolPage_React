import React, { useState } from 'react'
import './Home.css';
import IntroComponent from './IntroComponent';


function Home() {
    // window.onscroll = function() {myFunction()};

    // const [smthClass, setSmthClass] = useState();

    // function myFunction() {
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         setSmthClass('test');
    //     } else {
    //         setSmthClass('');
    //     }
    // }

    return (
        <div className="landing_page">
            <div className="introText">
                <p>Welcome to Biglol's Page</p>
                <p>[React and SpringBoot]</p>
            </div>
            <div className="myVariants">
                <IntroComponent variant = 'Skills'/>
                <IntroComponent variant = 'AboutMe'/>
                <IntroComponent variant = 'Clone/Projects'/>
            </div>
        </div>
    )
}

export default Home
