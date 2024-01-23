/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import HomeTitle from '../HomeTitle/HomeTitle';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <HomeTitle></HomeTitle>
            <JobCategory></JobCategory>
            <FeaturedJobs ></FeaturedJobs>
            <Footer></Footer>
        </div>
    );
};

export default Home;