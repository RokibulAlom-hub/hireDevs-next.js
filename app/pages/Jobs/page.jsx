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

const { NextResponse } = require("next/server");

//         }
//     }
//     fetchJobs()
//  },[])
//   return <div>this is job component</div>;
// };

// export default Jobs;

// ******above code is fore client side component method using useeffect ans state ******//

async function getjobs() {
  try {
    const response = await fetch("http://localhost:3000/api/createjob", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch jobs: ${response.status}`);
    }
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error("Error loading jobs:", error);
    return [];
  }
}

export default async function Jobs() {
  const jobs = await getjobs();
  return (
    <div>
      <h1>this is job list</h1>
      {/* {jobs?.length} */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
           {jobs?.map((job) => <Card key={job._id} data={job} ></Card>)}
      </div>
     
    </div>
  );
}
