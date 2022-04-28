import React, { useEffect, useState } from 'react';
import './Activities.css'
import { BiSearchAlt } from 'react-icons/bi'
import Activity from '../Activity/Activity';
const Activities = () => {
    const [activities, setActivities] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/activities')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div className='activities'>
            <div className='activities-header'>
                <h4>I GROW BY PEOPLE HELPING IN NEED</h4>
                <div className='search-field'>
                    <input type="search" name="search" placeholder="Search....." />
                    <BiSearchAlt className='search-icon'></BiSearchAlt>
                </div>
            </div>
            <div className='some-activities'>
                {
                    activities.map(activity => <Activity
                    key={activity._id}
                    activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Activities;