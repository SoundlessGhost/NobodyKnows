/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';
import './JobCategory.css'
import {jobs} from '../../utilities/categoryData'
const JobCategory = () => {

    return (
        <div>
            <h3 className='JobTitle'>Job Category List</h3>
            <p className='JobDescription'>Explore Thousands Of Job opportunities With All The Information You
                Need .It's Your Future.
            </p>
            <div className='jobContainer'>
                {
                    jobs.map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                }
            </div>
        </div>
    );
};

export default JobCategory;