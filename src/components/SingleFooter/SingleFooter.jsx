/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './SingleFooter.css'
const SingleFooter = ({Info}) => {
    const {work,careers,name ,about,news}=Info
    return (
        <div className='SingleFooterContainer'>
            <h1 className='name'>{name}</h1>
            <p>{about}</p>
            <p>{work}</p>
            <p>{news}</p>
            <p>{careers}</p>
        </div>
    );
};

export default SingleFooter;