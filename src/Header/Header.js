import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header({backStyle}) {
    const history = useHistory();

    const [loginString, setLoginString] = useState('');
    const [headerBackStyle, setHeaderBackStyle] = useState('header');

    const [{jwt_token}, dispatch] = useStateValue();

    useEffect(() => {
        if(!backStyle){
            setHeaderBackStyle('header backBlack');
        }
        else{
            setHeaderBackStyle('header');
        }
        const jwtToken = sessionStorage.getItem("jwt");
        if(jwtToken != null){
            setLoginString('Logout');
        }
        else{
            setLoginString('Login');
        }
    }, [backStyle])

    const loginlogout = (inOrOut) => {
        if(inOrOut == 'Login'){
            history.push('/login');
        }
        else{
            sessionStorage.removeItem('jwt');
            history.push('/');
            setLoginString('Login');

            dispatch({
                type: 'SET_USER_NULL'
            })
        }
    }

    return (
        <div className={headerBackStyle}>
            <Link to="/">
                <div className="home_text">
                    My First Project Using React + Spring
                </div>
            </Link>
            
            <div className="header_link">
                <Link to="/">
                    <div className="header_link_option">
                        <span className="headerText">
                            HomePage
                        </span>
                    </div>
                </Link>
                <Link to="/about">
                    <div className="header_link_option">
                        <span className="headerText">
                            About me
                        </span>
                    </div>
                </Link>
                <Link to="/courses">
                    <div className="header_link_option">
                        <span className="headerText">
                            Courses Taken
                        </span>
                    </div>
                </Link>
                <Link to="/projects">
                    <div className="header_link_option">
                        <span className="headerText">
                            Projects
                        </span>
                    </div>
                </Link>
                <Link onClick={() => loginlogout(loginString)}>
                    <div className="header_link_option">
                        <span className="headerText">
                            {loginString}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
