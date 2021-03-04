import React, { useEffect } from 'react';
import './Project_Item.css';
import RatingComp from '../CommonComp/RatingComp';

function Project_Item({itemIdx, name, path, reference, opinion, original_creator, rating, noUrl, deployedURL}) {
    return (

        <div className="projectBox">
            <div className="projectImage">
                <img src={path} alt=""/>
            </div>
            <h1>{itemIdx + 1} <span style={{'margin-left':'50px'}}>{name}</span></h1>
            <div className="projectInfoTable">
                <table>
                    <colgroup>
                        <col style={{width: '20%'}} />
                        <col style={{width: '80%'}} />
                    </colgroup>
                    <tr>
                        <td>
                            Reference:
                        </td>
                        <td>
                            {noUrl ? reference : <a href={reference}>{reference}</a>}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Original Creator: 
                        </td>
                        <td>
                            {original_creator}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Opinion:
                        </td>
                        <td>
                            {opinion}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Rating:
                        </td>
                        <td>
                            <RatingComp rating={rating} ratingColor='#2980B9'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            DeployedUrl
                        </td>
                        <td>
                            {noUrl ? deployedURL : <a href={deployedURL}>{deployedURL}</a>}
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Project_Item
