import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {img, name} = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='name'>
            <p>{name}</p>
            </div>
        </div>
    );
};

export default Activity;