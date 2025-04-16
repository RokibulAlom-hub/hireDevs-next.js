"use client"
import  { useState } from 'react';
const CreateJobs = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    requirments:[],
    type: 'Full-time',
    description: '',
  });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
  const handleChange = (e) => {
    // destructure input data here 
   const {name, value} = e.target;
   setFormData(prev => ({...prev, [name]: value}))
  }
  const handleSubmit =async (e) => {
    e.preventDefault();
    // console.log('Job submitted:', formData);
    // Add your API call here
    const response = await fetch("http://localhost:3000/api/createjob",{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    const result = await response.json();

   if(result.success){
    alert('Job created successfully!');
    setFormData({
      title: '',
      company: '',
      location: '',
      requirments:[],
      type: 'Full-time',
      description: '',
    });
   }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Create a New Job Post
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md text-white">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g. Frontend Developer"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g. HireDevs Inc."
          />
        </div>
       {/* requirement */}
       <div>
          <label className="block text-sm font-medium mb-1">Requirments</label>
          <input
            type="text"
            name="requirments"
            value={formData.requirments}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g. 1+ experience, graduate, english fluent speaker"
          />
        </div>
        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g. Dhaka, Remote"
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Job Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Write a brief about the job responsibilities and requirements"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default CreateJobs;
