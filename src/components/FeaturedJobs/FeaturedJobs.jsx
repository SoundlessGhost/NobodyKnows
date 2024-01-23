/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import SingleFeatured from "../SingleFeatured/SingleFeatured";
import "./FeaturedJobs.css";
import { jobs } from "../../utilities/featuredData";
import { useState } from "react";
const FeaturedJobs = () => {
  const [jobCount, setJobCount] = useState(jobs.slice(0, 4));
  const SeeMoreSeeLessHandler = () => {
    setJobCount(jobCount.length === 4 ? jobs : jobs.slice(0, 4));
  };
  return (
    <div>
      <h3 className="JobTitle">Featured Jobs</h3>
      <p className="JobDescription">
        Explore Thousands Of Job opportunities With All The Information You Need
        .It's Your Future.
      </p>
      <div className="FeaturedContainer">
        {jobCount.map((job) => (
          <SingleFeatured key={job.id} job={job}></SingleFeatured>
        ))}
      </div>
      <div className="btnContainer">
        <button className="SeeAllBtn" onClick={SeeMoreSeeLessHandler}>
          {jobCount.length === 4 ? "See All Jobs" : "See Less"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
