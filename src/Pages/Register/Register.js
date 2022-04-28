import React from 'react';
import './Register.css'
import {GoArrowLeft} from 'react-icons/go'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate= useNavigate();
    const back = () => {
        navigate('/')
    }
    return (
        <div>
            <GoArrowLeft onClick={back}></GoArrowLeft>
            <h2>Register</h2>
        </div>
    );
};

export default Register;