import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddImage from './AddImage';
import axios from '../../axios';
import { useStateValue } from '../../StateProvider';
import { AirportShuttleTwoTone } from '@material-ui/icons';
import { ToastContainer, toast } from 'react-toastify';

function AddSkill() {
    const [itemAttribute, setItemAttribute] = useState({skill_name: '', skill_path: '', skill_opinion: '', skill_rating: 0});
    const [file, setFile] = useState('');
    const [theFileName, setTheFileName] = useState('Choose Image');
    const [{jwt_token}, dispatch] = useStateValue();
    
    const handleChange = (event) => {
        setItemAttribute({...itemAttribute, [event.target.name] : event.target.value});
    }

    const onFileChange = e => {
        if(e.target.files.length > 1){
            alert("More than 1 selected");
            return;
        }
        setFile(e.target.files[0]);
        setTheFileName(e.target.files[0].name);
    }
// headers: {'Authorization': jwtToken}
    const handleSubmit = async (event) => {
        event.preventDefault();
        const jwtToken = sessionStorage.getItem("jwt");
        // console.log(itemAttribute);
        // console.log(file);
        // console.log(theFileName);
        const axiosConfig = {
            headers:{
                "Content-Type": "application/json",
                'Authorization': jwtToken
            }
        }

        const param = {
            name: itemAttribute.skill_name,
            path: itemAttribute.skill_path + '/' + theFileName,
            opinion: itemAttribute.skill_opinion,
            rating: itemAttribute.skill_rating,
            Authorization: jwtToken
        }

        axios.post('/skills', JSON.stringify(param), axiosConfig)
        .then((response) => {
            console.log(response);

            const formData = new FormData();
            formData.append('file', file);
        
            try {
                const res = axios.post('http://localhost:3000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            
                console.log(res);
                const { fileName, filePath } = res;
                        
                toast.success("Image Upload Success", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            } catch (err) {
                console.log(err);
                toast.error("Image Upload Failed", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }
        })
        .catch((err) => {
            if(err.response.status === 500){
                toast.error("There was a problem with the server", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }
            else{
                toast.error("Authentication is either expired or you do not have proper credentials", {
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
                <form onSubmit={handleSubmit}>
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
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
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
                            <label for="file">업로드</label> 
                            <input type="file" id="file" onChange={onFileChange}/> 
                            
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
