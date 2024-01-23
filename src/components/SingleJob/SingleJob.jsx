/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './SingleJob.css'

const SingleJob = ({job}) => {
    const {id,category_name,picture,availability}=job
    return (
        <div>
            <div className='JobInfo'>
                <img src={picture} alt="" />
                <p className='JobInfoName'>{category_name}</p>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default SingleJob;