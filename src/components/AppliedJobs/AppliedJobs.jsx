/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./AppliedJobs.css";
import { useNavigate, useParams } from "react-router-dom";
import { jobs } from "../../utilities/featuredData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
const AppliedJobs = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [JCount, setJCount] = useState({});
  useEffect(() => {
    const AppliedJob = jobs.find((i) => i.id == id);
    setJCount(AppliedJob);
  }, [id]);
  const { job_title, logo, company_name, address, salary } = JCount;
  const [mode, setMode] = useState(false);
  const ModeChange = () => {
    setMode(!mode);
  };
  return (
    <div>
      <div className="Job_details_container">
        <p>Applied Jobs</p>
      </div>
      <div>
        <button className="filterButton" onClick={ModeChange}>
          Filter{" "}
          {mode ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp } />
          )}
        </button>
        <div className="Applied_Jobs_Container">
          <div className="Applied_Jobs_Sub_Container">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <p>{job_title}</p>
              <p>{company_name}</p>
              <button className="FeatureBtn">Remote</button>
              <button className="FeatureBtn">Full Time</button>
              <div className="salaryAndLocation">
                <p>{address}</p>
                <p>{salary}</p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="ViewBtn"
              onClick={() => navigate(`/View_Details/${id}`)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
