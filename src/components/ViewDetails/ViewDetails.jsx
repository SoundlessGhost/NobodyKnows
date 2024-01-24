/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { jobs } from "../../utilities/featuredData";
import { useNavigate, useParams } from "react-router-dom";
import "./ViewDetails.css";
import phone1 from "../../assets/icons/phone.png";
import email1 from "../../assets/icons/email.png";
import location from "../../assets/icons/location2.png";
const ViewDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState({});
  useEffect(() => {
    const job = jobs.find((i) => i.id === parseInt(id)); // parseInt Or Two Equal Icon Such ( == )
    setItems(job);
  }, [id]);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    phone,
    email,
    address,
    salary,
    job_title,
  } = items;
  const navigation = useNavigate();
  const GoBackHandler = () => {
    navigation('/home');
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="Job_details_container">
        <p>Job Details</p>
      </div>
      <div className="JobGridContainer">
        <div className="appliedContainer">
          <p>
            <span>Job Description : </span>
            {job_description}
          </p>
          <p>
            <span>Job Responsibility : </span>
            {job_responsibility}
          </p>
          <p>
            <span>Education Requirements : </span>
            {educational_requirements}
          </p>
          <p>
            <span>Experiences : </span>
            {experiences}
          </p>
          <button onClick={GoBackHandler}>Go Back</button>
        </div>
        <div>
          <div className="jobInformationStyle">
            <h3>Job Details</h3>
            <hr />
            <p className="jobI">
              <p>Salary : </p>
              {salary}
            </p>
            <p className="jobI">
              <p>Job Title : </p>
              {job_title}
            </p>
            <h3>Contract Information</h3>
            <hr />
            <p className="imgTextFlex">
              <img src={phone1} />
              <p>Phone :</p>
              {phone}
            </p>
            <p className="imgTextFlex">
              <img src={email1} />
              <p>Email :</p>
              {email}
            </p>
            <p className="imgTextFlex">
              <img src={location} />
              <p>Address :</p>
              {address}
            </p>
          </div>
          <button
            className="JobApplyButton"
            onClick={() => navigate(`/applied_Job/${id}`)}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
