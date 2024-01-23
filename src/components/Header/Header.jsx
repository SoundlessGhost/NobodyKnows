/* eslint-disable no-unused-vars */
// import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css'
import IsActive from '../IsActive/IsActive';
const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='headerSubContainer'>
                <div>
                    <p>Nobod<span>y</span> Know<span>s</span></p>
                </div>
                <div>
                    <IsActive to="/home">Home</IsActive>
                    <IsActive to="/statistics">Statistics</IsActive>
                    <IsActive to="/blogs">Blogs</IsActive>
                    <IsActive to="/applied_jobs">Applied Jobs</IsActive>
                </div>
                <button className='button'>Start Apply</button>
            </div>
        </div>
    );
};

export default Header;