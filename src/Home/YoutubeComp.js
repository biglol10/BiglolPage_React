import React from 'react';
import './YoutubeComp.css';
import YouTube from 'react-youtube';

function YoutubeComp() {

    const opts = {
        height: "570",
        width: "100%",
        playerVars:{
            // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }
    }

    const videoId = "jQBi2Ull5l8";

    return (
        <div className="youtubePage">
            <div className="youtubeVideo">
                <YouTube videoId={videoId} opts={opts}/>
                <div className="myprojectInfo">
                <div className="infogrid1">
                        <h2>Project Info</h2>
                    </div>
                    <div className="infogrid2">
                    </div>
                    <div className="infogrid1">
                        <i class="fab fa-github fa-2x"></i>
                        <span><a href="https://github.com/biglol10/BiglolPage_React">https://github.com/biglol10/BiglolPage_React</a>[React]</span>
                    </div>
                    <div className="infogrid2">
                        <i class="fab fa-github fa-2x"></i>
                        <span><a href="https://github.com/biglol10/BiglolPage_SpringBootApp">https://github.com/biglol10/BiglolPage_SpringBootApp</a>[Spring Boot]</span>
                    </div>
                    <div className="infogrid1">
                        <i class="fab fa-react fa-2x" style={{color:'deepskyblue'}}></i>
                        <span><a href="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ">Clever Programmer</a>[Learned React From Here]</span>
                    </div>
                    <div className="infogrid2">
                        <i class="fas fa-images fa-2x" style={{color: '#FA4505'}}></i>
                        <span><a href="https://www.youtube.com/watch?v=b6Oe2puTdMQ">Traversy Media</a>[Image Upload Reference]</span>
                    </div>
                    <div className="infogrid1">
                        <i class="fas fa-book-open fa-2x" style={{color:'#B67C42'}}></i>
                        <span><a href="https://www.packtpub.com/product/hands-on-full-stack-development-with-spring-boot-2-and-react-second-edition/9781838822361">SpringBoot E-Book</a>[E-Book]</span>
                    </div>
                    <div className="infogrid2">
                        <i class="fas fa-signal fa-2x" style={{color:'lawngreen'}}></i>
                        <span><a href="https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/learn/lecture/8004660#overview">Spring Online Course</a>[Online Course]</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YoutubeComp
