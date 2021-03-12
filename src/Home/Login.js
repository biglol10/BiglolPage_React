import React, { useState, useEffect } from 'react'
import axios from '../axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState({username: '', password: ''})
    const [isAuthenticated, setAuth] = useState(false);
    const [checkedG, setCheckedG] = useState();

    const history = useHistory();

    const GreenCheckbox = withStyles({
        root: {
          color: green[400],
          '&$checked': {
            color: green[600],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);
    
    const handleChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value})
    }

    const handleCheckChange = (event) => {
        setCheckedG(event.target.checked);
        localStorage.setItem("remem",event.target.checked);
    };

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    const login = () => {
        if(user.username.length < 3 || user.password.length < 3){
            toast.warn("Username Or Password length is incorrect", {
                position: toast.POSITION.BOTTOM_LEFT
            })
            // const aaaa = sessionStorage.getItem("ASFSADF");
            // if(aaaa==null)
            //     alert("QWRQWER");
            return;
        }

        axios.post('/login', {
            username: user.username,
            password: user.password
        })
        .then((response) => {
            console.log(response);
            const jwtToken = response.headers['authorization'];
            sessionStorage.setItem("jwt", jwtToken);
            setAuth(true);
            history.push('/');
        }, (error) => {
            // console.log(error);
            toast.error("Username/Password is incorrect", {
                position: toast.POSITION.BOTTOM_LEFT
            })
        });

    // fetch('http://localhost:8080/' + 'login', {
    //   method: 'POST',
    //   body: JSON.stringify(user)
    // })
    // .then(res => {
    //   const jwtToken = res.headers.get('Authorization');
    //   if (jwtToken !== null) {
    //       alert(jwtToken);
    //     sessionStorage.setItem("jwt", jwtToken);
    //     setAuth(true);
    //   }
    //   else {
    //       alert("fail");
    //     // toast.warn("Check your username and password", {
    //     //   position: toast.POSITION.BOTTOM_LEFT
    //     // }) 
    //   }
    // })
    // .catch(err => console.error(err)) 
    }

    useEffect(()=>{
        const rememberCheck = localStorage.getItem("remem");
        // console.log('checkg ', checkedG);
        // console.log('remem ', rememberCheck);
        if(rememberCheck == null || rememberCheck == false || rememberCheck == 'false' || checkedG == false)
            setCheckedG(false);
        else
            setCheckedG(true);
        
    },[])

    return (
        <div className="loginPage">
            <div className="accountArea">
                <div className="accountTitle">
                    <img src='./Images/Home/LoginPageImage.png' alt=""/>
                    <span>Biglol Page Login</span>
                </div>
                <hr/>
                <br/>
                <div className="idpwArea">
                    <div className="idarea">
                    <TextField
                        required
                        id="outlined-required"
                        label="Account"
                        name="username"
                        defaultValue=""
                        variant="outlined"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="pwarea">
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        name="password"
                        defaultValue=""
                        variant="outlined"
                        type="password"
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <hr/>
                <br/><br/>  
                <div className="submitArea">
                    <FormControlLabel
                        control={<GreenCheckbox checked={checkedG} onChange={handleCheckChange} name="checkedGS" />}
                        label="Remember Me"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                        onClick={login}
                    >
                        Send
                    </Button>
                </div>                
            </div>
            <div className="loginBackImage"></div>
            <ToastContainer autoClose={3000} /> 
        </div>
    )
}

export default Login
