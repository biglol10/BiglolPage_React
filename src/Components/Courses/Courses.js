import React, { useState, useEffect } from 'react';
import './Courses.css';
import CourseItem from './CourseItem';
import axios from '../../axios';

function Courses() {
    const buttonChange = (idValue, type) => {
        const buttonContainerClass = document.getElementsByClassName('courseCategory');
        for (let idx = 0; idx < buttonContainerClass.length; idx++) {
            buttonContainerClass[idx].classList.remove('categoryShow');
        }
        const buttonContainerId = document.getElementById(idValue);
        buttonContainerId.classList.add('categoryShow');
        setCourseType(type);
    }

    const [courseType, setCourseType] = useState('T');
    const [courseList, setCourseList] = useState([]);

    useEffect(()=>{
        const getCourseList = async () => {
            const response = await axios({
                method: 'get',
                url: `/courses/${courseType}`
            })
            setCourseList(response.data)
        }
        getCourseList();
    }, [courseType])
    
    console.log(courseList);
    return (
        <div className="coursesPage">
            <div className="courseText">
                <h1>The courses I took and interested in</h1>
            </div>
            <div className="courseContainer">
                <div className="courseButtons">
                    <div onClick={() => buttonChange('courseT', 'T')} id="courseT" className="courseCategory categoryShow">
                        <span>
                            Courses Taken
                        </span>
                    </div>
                    <div onClick={() => buttonChange('courseI', 'I')} id="courseI" className="courseCategory">
                        <span>
                            Courses Interested
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="courseWrapper">
                    {
                        courseList.map((item, i) => (
                            <CourseItem
                                name={item.name}
                                url={item.url}
                                path={item.path}
                                instructor_details={item.instructorDetails}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Courses
