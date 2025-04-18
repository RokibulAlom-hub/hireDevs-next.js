import CardParent from "../Components/Card";

export default async function Jobs({ searchParams }) {
  const query = new URLSearchParams(searchParams).toString()
  // console.log("this is searchParams", searchParams,"this is query", query);
  
  // const query = type ? `?type=${type}` : "";
  const res = await fetch(`http://localhost:3000/api/createjob?${query}`, {
    cache: "no-store",
  });
  const jobs = await res.json();

  return (
    <div className="p-6">
      {/* Filter Buttons that reload the page with new query */}
      <div className="flex gap-4 mb-6">
        <a href="/jobs" className="btn">
          All
        </a>
        <a href="/jobs?type=Full-time" className="btn">
          Full-time
        </a>
        <a href="/jobs?type=Internship" className="btn">
          Internship
        </a>
        <a href="/jobs?location=Remote" className="btn">
         Remote
        </a>
       
      
      </div>
      {/* this form is search query */}

      <form method="get">
        <input type="text"
        name="search"
        placeholder="search by keyword"
        className=""
         />
         <button type="submit">Search</button>  
      </form>
      <CardParent jobs={jobs}></CardParent>
    </div>
  );
}
