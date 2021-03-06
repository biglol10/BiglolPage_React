import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddImage from './AddImage';
import axios from 'axios';
import { useStateValue } from '../../StateProvider';
import { AirportShuttleTwoTone } from '@material-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import serverConstant from '../../ServerContant';

function AddSkill({checkDecimal}) {
    const [itemAttribute, setItemAttribute] = useState({skill_name: '', skill_path: './Images/Skills', skill_opinion: '', skill_rating: 0});
    const [file, setFile] = useState('');
    const [theFileName, setTheFileName] = useState('Choose Image');
    const [{jwt_token}, dispatch] = useStateValue();
    
    const handleChange = (event) => {
        setItemAttribute({...itemAttribute, [event.target.name] : event.target.value});
    }

    const onFileChange = e => {
        if(e.target.files.length > 1){
            toast.error("Only 1 image is permitted", {
                position: toast.POSITION.BOTTOM_LEFT
            })
            return;
        }
        setFile(e.target.files[0]);
        setTheFileName(e.target.files[0].name);
    }

// headers: {'Authorization': jwtToken}
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!checkDecimal(itemAttribute.skill_rating)){
            toast.error("Valid Rating Required or divisible by 0.5", {
                position: toast.POSITION.BOTTOM_LEFT
            })
            return;
        }

        const fileExtension = theFileName.split('.').pop();
        const extensions = ['jpg', 'png'];
        if(!extensions.includes(fileExtension)){
            toast.error("Only jpg, png extension file is allowed", {
                position: toast.POSITION.BOTTOM_LEFT
            })
            return;
        }

        const jwtToken = sessionStorage.getItem("jwt");
        // console.log(itemAttribute);
        // console.log(file);
        // console.log(theFileName);

        let axiosConfig = {};
        if(jwtToken == null){
            axiosConfig = {
                headers:{
                    "Content-Type": "application/json"
                }
            }
        }
        else{
            axiosConfig = {
                headers:{
                    "Content-Type": "application/json",
                    'Authorization': jwtToken
                }
            }
        }

        const param = {
            name: itemAttribute.skill_name,
            path: itemAttribute.skill_path + '/' + theFileName,
            opinion: itemAttribute.skill_opinion,
            rating: itemAttribute.skill_rating,
            // Authorization: jwtToken
        }

        axios.post(`${serverConstant['SERVER_URL']}/skills`, JSON.stringify(param), axiosConfig)
        .then((response) => {
            const formData = new FormData();
            formData.append('file', file);

            const res = axios.post('/upload/skill', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((resp) => {
                console.log('skill upload response > ', resp);
                toast.success("Data/Image Upload Success", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            })
            .catch((err1) => {
                console.log('skill upload error1 > ', err1);
                toast.error('[Data is Saved] But image upload failed', {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            })
        })
        .catch((err2) => {
            console.log('skill upload error2 > ', err2);
            if(err2.response.status == 403){
                toast.error('No proper authentication', {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }
            else if (err2.response.status == 400){
                toast.error('Validation Failed for Skill name', {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }
            else{
                toast.error('Internal Server Error', {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }
        })
    }

    return (
        <>
            <section className="addPage skillItem">
                <div className="details">
                    <h1>Skill Item</h1>
                    <h2>Insert the skill that you've learned</h2>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
                <form className="formDetail" onSubmit={handleSubmit}>
                    <div className="hero">
                        <h2 style={{color: 'black'}}>Skill Item</h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Skill name"
                            name="skill_name"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Skill path"
                            name="skill_path"
                            defaultValue={itemAttribute.skill_path}
                            variant="outlined"
                            onChange={handleChange}
                            disabled={true}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Skill opinion"
                            name="skill_opinion"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Skill rating"
                            name="skill_rating"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <div class="filebox"> 
                            <label htmlFor="skill_file" style={{color: 'darkviolet'}}>업로드</label> 
                            <input type="file" id="skill_file" onChange={onFileChange}/> 
                            
                            <input class="upload-name" value={theFileName}/>
                        </div>
                        <Button id="submitSkill" type="submit" variant="outlined" color="secondary">
                            Submit
                        </Button>
                    </div>
                </form>
                <ToastContainer autoClose={3000} /> 
            </section>
        </>
    )
}

export default AddSkill
