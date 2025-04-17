// "use client";
// import { useEffect, useState } from "react";
// const Jobs =  () => {
//  const [jobs, setJobs] = useState([]);
//  useEffect(() => {
//     const fetchJobs = async () => {
//         try {
//             const response = await fetch("http://localhost:3000/api/createjob");
//             const result = await response.json();
//             console.log(result);
//             setJobs(result)
//         } catch (error) {
//             console.log(error);

import Card from "../../Components/Card";
export default async function Jobs() {
  // and this fetch method i wanted data through query request
  const response = await fetch(`http://localhost:3000/api/createjob`, {
    cache: "no-store",
  })
  if (!response.ok) {
          throw new Error(`Failed to fetch jobs: ${response.status}`);
        }
  const jobs = await response.json();
  return (
    <div>
     {/* here i wanted to make a filter system where user can filter jobs by their choice */}
      {/* {jobs?.length} */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
           {jobs?.map((job) => <Card key={job._id} data={job} ></Card>)}
      </div>
     
    </div>
  );
}
