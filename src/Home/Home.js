import React, { useState, useEffect } from 'react'
import './Home.css';
import IntroComponent from './IntroComponent';
import Typical from 'react-typical'

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

    useEffect(()=>{
        const keyEvent = window.addEventListener('keydown', (event)=>{
            if(event.ctrlKey == true && event.key == 'b'){
                // alert("SADF");
            }
        });
        return () => {
            window.removeEventListener('keydown', keyEvent);
        }
    },[])

    return (
        <div className="landing_page">
            <div className="introText">
                <Typical steps={['',0,'Welcome to Biglol Page']} loop={1} wrapper="p"/>
                {/* <p>Welcome to Biglol's Page</p> */}
                <Typical steps={['',0,'[React and SpringBoot]']} loop={1} wrapper="p"/>
                {/* <p>[React and SpringBoot]</p> */}
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
