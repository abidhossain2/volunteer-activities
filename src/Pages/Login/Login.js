import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {GoArrowLeft} from 'react-icons/go'
import { FcGoogle } from 'react-icons/fc'
import './Login.css'
import logo from '../../logos/Group 1329.png'

const Login = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/')
    }
    return (
        <div className='login-container'>
            <GoArrowLeft className='back' onClick={back}></GoArrowLeft>
            <img src={logo} alt="" />
            <div className='login-box'>
                <div className='signin'>
                    <div className='login-header'><h5>Login with</h5></div>
                    <div className='google-login'><div className='google-icon'><FcGoogle></FcGoogle></div><div>Continue with google</div></div>
                    <div className='exist-login'><p>Don't have an account? <Link to='/register' className='signup'>Create an account</Link></p></div>
                </div>
            </div>
        </div>
    );
};

export default Login;