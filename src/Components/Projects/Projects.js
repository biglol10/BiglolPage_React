import React, { useState, useEffect } from 'react';
import './Projects.css';
import Project_Item from './Project_Item';
import axios from 'axios';
import serverConstant from '../../ServerContant';
import { SpinnerCircularFixed } from 'spinners-react';
import { ToastContainer, toast } from 'react-toastify';

function Projects() {
    const [projectList, setProjectList] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            const getProjectList = async () => {
                const response = await axios({
                    url: `${serverConstant['SERVER_URL']}/projects`,
                    method: 'get',
                })
                .then((res) => {
                    setLoading(false);
                    setProjectList(res.data)
                })
                .catch((err) => {
                    setLoading(false);
                    try{
                        if(err.response.status == 404){
                            toast.error("Either there is no project item or unable to fetch", {
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
            getProjectList();
        }, 700);
        
        
    }, [])

    return (
        <div className="projectsPage">
            <div className="projectText">
                <h1>Clone/Personal Projects</h1>
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
                    <div className="project_lists">
                        {
                            projectList.map((item, index) => (
                                <Project_Item 
                                    name={item.name} 
                                    path={item.path}
                                    reference={item.reference}
                                    opinion={item.opinion}
                                    original_creator={item.original_creator}
                                    rating={item.rating}
                                    noUrl={item.noUrl}
                                    deployedURL={item.deployedURL}
                                    itemIdx={index}/>
                            ))
                        }
                    </div>
                )
            }
            
            <ToastContainer autoClose={3000} /> 
        </div>
    )
}

export default Projects
