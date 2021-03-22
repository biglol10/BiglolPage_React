import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddImage from './AddImage';
import axios from '../../axios';
import { useStateValue } from '../../StateProvider';
import { AirportShuttleTwoTone } from '@material-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

function AddProject() {
    const [itemAttribute, setItemAttribute] = useState(
        {
            project_name: '', 
            project_path: './Images/Projects', 
            project_reference: '', 
            project_opinion: '',
            project_org_creator: '',
            project_deployedUrl: '',
            project_rating: 0,
            project_noUrl: true
        }
    );
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
            name: itemAttribute.project_name,
            path: itemAttribute.project_path + '/' + theFileName,
            reference: itemAttribute.project_referece,
            opinion: itemAttribute.project_opinion,
            original_creator: itemAttribute.project_org_creator,
            deployedURL: itemAttribute.project_deployedUrl,
            rating: itemAttribute.project_rating,
            noUrl: itemAttribute.project_noUrl
            // Authorization: jwtToken
        }

        axios.post('/projects', JSON.stringify(param), axiosConfig)
        .then((response) => {
            console.log(response);

            const formData = new FormData();
            formData.append('file', file);
        
            try {
                const res = axios.post('http://localhost:3000/upload/project', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((resp) => {
                    console.log('resp in then > ', resp)
                    if(resp.status == 200){
                        toast.success("Image Upload Success", {
                            position: toast.POSITION.BOTTOM_LEFT
                        })
                    }
                    else{
                        toast.error("Image Upload Failed", {
                            position: toast.POSITION.BOTTOM_LEFT
                        })
                    }
                }).catch((err) => {
                    console.log('err in then ', err);
                    toast.error("Image Upload Failed", {
                        position: toast.POSITION.BOTTOM_LEFT
                    })
                });
            } catch (err) {
                console.log(err);
                toast.error("Image Upload Failed", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 500){
                toast.error("Problem with server or invalid jwt token", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }
            else{
                toast.error("Authentication expired / inappropriate credentials", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }
            console.log(err.message);
        })
    }

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    return (
        <>
            <section className="addPage projectItem">
                <div className="details">
                    <h1>Project Item</h1>
                    <h2>Insert the Project that you've created</h2>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
                <form className="formDetail" onSubmit={handleSubmit}>
                    <div className="hero projectInput">
                        <h2 style={{color: 'black'}}>Project Item</h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Project name"
                            name="project_name"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Project path"
                            name="project_path"
                            defaultValue={itemAttribute.project_path}
                            variant="outlined"
                            onChange={handleChange}
                            disabled={true}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Project referece"
                            name="project_reference"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Project opinion"
                            name="project_opinion"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Project Original Creator"
                            name="project_org_creator"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Project deployedUrl"
                            name="project_deployedUrl"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Project rating"
                            name="project_rating"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">NoUrl</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={itemAttribute.project_noUrl}
                            onChange={handleChange}
                            label="noUrl"
                            name="project_noUrl"
                            >
                                <MenuItem value={true}>TRUE</MenuItem>
                                <MenuItem value={false}>FALSE</MenuItem>
                            </Select>
                        </FormControl>
                        <div class="filebox"> 
                            <label for="project_file" style={{color: 'darkviolet'}}>업로드</label> 
                            <input type="file" id="project_file" onChange={onFileChange}/> 
                            
                            <input class="upload-name" value={theFileName}/>
                        </div>
                        <Button id="submitProject" type="submit" variant="outlined" color="secondary">
                            Submit
                        </Button>
                    </div>
                </form>
                <ToastContainer autoClose={3000} /> 
            </section>
        </>
    )
}

export default AddProject
