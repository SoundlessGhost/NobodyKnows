import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Statistics from "./components/Statistics/Statistics";
import ViewDetails from "./components/ViewDetails/ViewDetails";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied_jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "View_Details/:id",
        element: <ViewDetails></ViewDetails>,
        loader:()=>fetch(`featuredData.json`)
      },
      {
        path:"applied_Job/:id",
        element:<AppliedJobs></AppliedJobs>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
