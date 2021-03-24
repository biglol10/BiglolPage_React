import React, { useState, useEffect } from 'react';
import './Projects.css';
import Project_Item from './Project_Item';
import axios from 'axios';


function Projects() {
    const [projectList, setProjectList] = useState([]);

    useEffect(()=>{
        const getProjectList = async () => {
            const response = await axios({
                url: 'http://localhost:8080/projects',
                method: 'get',
            })
            setProjectList(response.data)
        }
        getProjectList();
    }, [])

    return (
        <div className="projectsPage">
            <div className="projectText">
                <h1>Clone/Personal Projects</h1>
            </div>
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
        </div>
    )
}

export default Projects
