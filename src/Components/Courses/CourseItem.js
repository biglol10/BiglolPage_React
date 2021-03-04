import React from 'react';
import './CourseItem.css';
import RatingComp from '../CommonComp/RatingComp';

function CourseItem({name, url, path, instructor_details, price, rating}) {
    return (
        <div className="courseItem">
            <a className="courseImage" href={url}>
                <div className="courseImage playButtonTrigger">
                    <img src={path} alt="" style={{width:'100%', height:'135px'}}/>
                    <div className="playButton"></div>
                </div>
            </a>
            <a className="courseExplanation" href={url}>
                <div className="courseDetails">
                    <strong>{name}</strong>
                    <div className="courseInstructor">
                        <span>{instructor_details.length > 50 ? instructor_details.substring(0,50) + '...' : instructor_details}</span>
                    </div>
                    <div className="coursePricingRating">
                        <div><span>&#8361; {price}</span></div>
                        <div><RatingComp rating={rating}/></div>
                        <br/>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CourseItem
