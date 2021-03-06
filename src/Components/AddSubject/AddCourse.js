import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddImage from './AddImage';
import axios from 'axios';
import { useStateValue } from '../../StateProvider';
import { AirportShuttleTwoTone } from '@material-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import serverConstant from '../../ServerContant';

function AddCourse({checkDecimal}) {
    const [itemAttribute, setItemAttribute] = useState(
        {
            course_name: '', 
            course_url: '', 
            course_path: './Images/Courses', 
            course_instructorDetails: '',
            course_price: '',
            course_rating: 0,
            course_courseType: 'T'
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!checkDecimal(itemAttribute.course_rating)){
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
            name: itemAttribute.course_name,
            url: itemAttribute.course_url,
            path: itemAttribute.course_path + '/' + theFileName,
            instructorDetails: itemAttribute.course_instructorDetails,
            price: itemAttribute.course_price,
            rating: itemAttribute.course_rating,
            courseType: itemAttribute.course_courseType,
        }

        axios.post(`${serverConstant['SERVER_URL']}/courses`, JSON.stringify(param), axiosConfig)
        .then((response) => {
            const formData = new FormData();
            formData.append('file', file);

            const res = axios.post('/upload/course', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((resp) => {
                console.log('course upload response > ', resp);
                toast.success("Data/Image Upload Success", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            })
            .catch((err1) => {
                console.log('course upload error1 > ', err1);
                toast.error('[Data is Saved] But image upload failed', {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            })
        })
        .catch((err2) => {
            console.log('course upload error2 > ', err2);
            if(err2.response.status == 403){
                toast.error('No proper authentication', {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }
            else if (err2.response.status == 400){
                toast.error('Validation Failed for Course name', {
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
                    <h1>Course Item</h1>
                    <h2>Insert the Course that you've listened</h2>
                    <h2>Or you are interested in</h2>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
                <form className="formDetail" onSubmit={handleSubmit}>
                    <div className="hero projectInput">
                        <h2 style={{color: 'black'}}>Course Item</h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Course name"
                            name="course_name"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Course url"
                            name="course_url"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Course path"
                            name="course_path"
                            defaultValue={itemAttribute.course_path}
                            variant="outlined"
                            onChange={handleChange}
                            disabled={true}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Course instructor"
                            name="course_instructorDetails"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Course price"
                            name="course_price"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Course rating"
                            name="course_rating"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">CourseType</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={itemAttribute.course_courseType}
                            onChange={handleChange}
                            label="CourseType"
                            name="course_courseType"
                            >
                                <MenuItem value={"T"}>TAKEN</MenuItem>
                                <MenuItem value={"I"}>INTERESTED</MenuItem>
                            </Select>
                        </FormControl>
                        <div class="filebox"> 
                            <label htmlFor="course_file" style={{color: 'darkviolet'}}>업로드</label> 
                            <input type="file" id="course_file" onChange={onFileChange}/> 
                            
                            <input class="upload-name" value={theFileName}/>
                        </div>
                        <Button id="submitCourse" type="submit" variant="outlined" color="secondary">
                            Submit
                        </Button>
                    </div>
                </form>
                <ToastContainer autoClose={3000} /> 
            </section>
        </>
    )
}

export default AddCourse
