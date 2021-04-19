import React, { useState, useEffect } from 'react';
import './Courses.css';
import CourseItem from './CourseItem';
import axios from 'axios';
import serverConstant from '../../ServerContant';
import { SpinnerCircularFixed } from 'spinners-react';
import { ToastContainer, toast } from 'react-toastify';

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
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        let statement = courseType == 'T' ? '[taken]' : '[interested]';
        setTimeout(() => {
            const getCourseList = async () => {
                const response = await axios({
                    method: 'get',
                    url: `${serverConstant['SERVER_URL']}/courses/${courseType}`,
                })
                .then((res) => {
                    setLoading(false);
                    setCourseList(res.data)
                })
                .catch((err) => {
                    setLoading(false);
                    try{
                        if(err.response.status == 404){
                            toast.error(`Either there is no ${statement} course item or unable to fetch`, {
                                position: toast.POSITION.BOTTOM_LEFT
                            })
                        }
                        else{
                            toast.error("There is a problem with the server", {
                                position: toast.POSITION.BOTTOM_LEFT
                            })
                        }
                    }
                    catch (exception) {
                        toast.error("Connection Timeout [Server Problem]", {
                            position: toast.POSITION.BOTTOM_LEFT
                        })
                    }
                })
            }
            getCourseList();
        }, 1000);
        
    }, [courseType])
    
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
                {
                    loading ? (
                        <SpinnerCircularFixed 
                            size={50} 
                            thickness={100} 
                            speed={100} 
                            color="#36ad47" 
                            secondaryColor="rgba(0, 0, 0, 0.44)" 
                            style={{position:'absolute', top:'50%', left:'50%'}}
                        />
                    ) : (
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
                    )
                }
            </div>
            <ToastContainer autoClose={3000} /> 
        </div>
    )
}

export default Courses
