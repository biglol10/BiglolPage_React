import React, { useState, useEffect } from 'react';
import './Courses.css';

function Courses() {
    const buttonChange = (idValue) => {
        const buttonContainerClass = document.getElementsByClassName('courseCategory');
        for (let idx = 0; idx < buttonContainerClass.length; idx++) {
            buttonContainerClass[idx].classList.remove('categoryShow');
        }
        const buttonContainerId = document.getElementById(idValue);
        buttonContainerId.classList.add('categoryShow');
    }
    

    return (
        <div className="coursesPage">
            <div className="courseText">
                <h1>The courses I took and interested in</h1>
            </div>
            <div className="courseContainer">
                <div className="courseButtons">
                    <div onClick={() => buttonChange('courseT')} id="courseT" className="courseCategory categoryShow">
                        <span>
                            Courses Taken
                        </span>
                    </div>
                    <div onClick={() => buttonChange('courseI')} id="courseI" className="courseCategory">
                        <span>
                            Courses Interested
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="courseDetails">
                    
                </div>
            </div>
            
        </div>
    )
}

export default Courses
