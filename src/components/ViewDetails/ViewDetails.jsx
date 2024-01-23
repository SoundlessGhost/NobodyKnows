/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { jobs } from "../../utilities/featuredData";
import { useParams } from "react-router-dom";
const ViewDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState({});
  useEffect(() => {
    const job = jobs.find((i) => i.id === parseInt(id)); // parseInt Or Two Equal Icon Such ( == )
    setItems(job);
  }, [id]);
  const { job_title } = items;
  return (
    <div>
      <div>
        <h1>{job_title}</h1>
      </div>
    </div>
  );
};

export default ViewDetails;
