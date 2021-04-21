import React, { useEffect, useState } from 'react';
import './Skills.css';
import Skill_Item from './Skill_Item';
import axios from 'axios';
import FlipMove from "react-flip-move";
import serverConstant from '../../ServerContant';
import { SpinnerCircularFixed } from 'spinners-react';
import { ToastContainer, toast } from 'react-toastify';


function Skills() {

    const [skillList, setSkillList] = useState([]);

    const jwtToken = sessionStorage.getItem("jwt");

    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        setTimeout(() => {
            const getSkillList = async () => {
                const response = await axios({
                    method: 'get',
                    url: `${serverConstant['SERVER_URL']}/skills`,
                    // headers: {'Authorization': jwtToken}
                })
                .then((res) => {
                    setLoading(false);
                    setSkillList(res.data);
                })
                .catch((err) => {
                    // console.log(err);
                    // console.log(err.message);
                    // console.log(err.response.status);
                    setLoading(false);
                    try{
                        if(err.response.status == 404){
                            toast.error("Either there is no skill item or unable to fetch", {
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
            getSkillList();   
        }, 700);

        

    }, [])

    return (
        // <div className="skillPage" dangerouslySetInnerHTML={ {__html: stringVar}}>
        <div className="skillPage">
            <div className="skillSets">
                <h1>My Skillset</h1>
            </div>
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
                    <div className="skill_lists">
                        {
                            skillList.map((item, index) => (

                                <div className="skill_card">
                                    <Skill_Item name={item.name} opinion={item.opinion} path={item.path} rating={item.rating}/>
                                </div>                       
                            ))
                        }
                    </div>
                )
            }
            
            <ToastContainer autoClose={3000} /> 
        </div>
    )
}

export default Skills
