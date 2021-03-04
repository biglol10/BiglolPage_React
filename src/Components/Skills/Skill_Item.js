import React from 'react';
import './Skill_Item.css';
import RatingComp from '../CommonComp/RatingComp';

function Skill_Item({name, opinion, path, rating}) {
    const num = parseInt(rating,10);
    let isDecimal = false;
    if(rating - num == 0.5)
        isDecimal = true;
    const remainingStars = parseInt(5 - rating, 10);

    return (
        <di className="skillCard">
            <img src={path} alt=""/>
            <h4>{name}</h4>
            <hr/>
            {
                opinion.length <= 15 ?
                <span>{opinion}<br/><br/></span>
                :
                <span>{opinion}</span>
            }
            <RatingComp rating={rating}/>
        </di>
    )
}

export default Skill_Item
