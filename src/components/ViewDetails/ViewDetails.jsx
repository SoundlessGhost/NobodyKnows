/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data);
  return (
    <div>
      <p>hey {data.length}</p>
    </div>
  );
};

export default ViewDetails;
