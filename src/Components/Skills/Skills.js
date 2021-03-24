import React, { useEffect, useState } from 'react';
import './Skills.css';
import Skill_Item from './Skill_Item';
import axios from 'axios';
import FlipMove from "react-flip-move";
import serverConstant from '../../ServerContant';

function Skills() {

    const [skillList, setSkillList] = useState([]);

    const jwtToken = sessionStorage.getItem("jwt");

    useEffect(()=>{
        const getSkillList = async () => {
            const response = await axios({
                method: 'get',
                url: `${serverConstant['SERVER_URL']}/skills`,
                // headers: {'Authorization': jwtToken}
            })
            setSkillList(response.data)
        }
        getSkillList();
    }, [])

    return (
        // <div className="skillPage" dangerouslySetInnerHTML={ {__html: stringVar}}>
        <div className="skillPage">
            <div className="skillSets">
                <h1>My Skillset</h1>
            </div>
            <div className="skill_lists">
                {
                    skillList.map((item, index) => (

                        <div className="skill_card">
                            <Skill_Item name={item.name} opinion={item.opinion} path={item.path} rating={item.rating}/>
                        </div>                       
                    ))
                }
            </div>
        </div>
    )
}

export default Skills
