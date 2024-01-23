/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./SingleFeatured.css";
import { useNavigate } from "react-router-dom";
const SingleFeatured = ({ job }) => {
  const navigate = useNavigate();
  const { logo, job_title, company_name, location, salary, id } = job;
  return (
    <div>
      <div className="FeaturedInfo">
        <img src={logo} alt="" />
        <p>{job_title}</p>
        <p>{company_name}</p>
        <button className="FeatureBtn">Remote</button>
        <button className="FeatureBtn">Full Time</button>
        <p>
          {location} {salary}
        </p>
        <button
          onClick={() => navigate(`/View_Details/${id}`)}
          className="ViewBtn"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default SingleFeatured;
