import React from 'react';
import './Register.css'
import { GoArrowLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'

const Register = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/')
    }
    return (
        <div className='register-container'>
            <GoArrowLeft className='back' onClick={back}></GoArrowLeft>
            <img src={logo} alt="" />
            <div className='register-box'>
                <div className='register'>
                        <h4 style={{color:'black'}}>Register as volunteer</h4>
                        <input type="text" name="name" placeholder="Full name" /> <br />
                        <input type="email" name="email" placeholder="User name or email" /> <br />
                        <input type="text" name="date" placeholder="Date" /> <br />
                        <input type="text" name="description" placeholder="Description" /> <br />
                        <input type="text" name="organize" placeholder="Organize books at the library" /> <br />
                        <button className='reg-btn'>Registration</button>
                </div>
            </div>
        </div>
    );
};

export default Register;