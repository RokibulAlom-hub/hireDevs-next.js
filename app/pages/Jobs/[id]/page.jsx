import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaList,
  FaFileAlt,
  FaBuilding,
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
export const JobDetails = async ({ params }) => {
  const response = await fetch(
    `http://localhost:3000/api/createjob/${params?.id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch jobs: ${response.status}`);
  }
  const job = await response.json();
//   console.log(job);

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {job.title}
                </h1>
                <h2 className="text-xl font-medium text-blue-100">
                  {job.company}
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-blue-700 hover:bg-blue-50 font-medium px-5 py-2 rounded-md shadow-sm transition-colors duration-200">
                  Save Job
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md shadow-sm transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-gray-200">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-gray-500 mr-2 text-lg" />
              <span className="text-gray-700">{job.location}</span>
            </div>
            <div className="flex items-center">
              <FaBriefcase className="text-gray-500 mr-2 text-lg" />
              <span className="text-gray-700">{job.type}</span>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-500 mr-2 text-lg" />
              <span className="text-gray-700">Posted 2 days ago</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FaFileAlt className="text-blue-600 mr-2" />
                  Job Description
                </h3>
              </div>
              <div className="px-6 py-5">
                <p className="text-gray-700 whitespace-pre-line">
                  {job.description}
                </p>
              </div>
            </div>

            {/* Requirements Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FaList className="text-blue-600 mr-2" />
                  Requirements
                </h3>
              </div>
              <div className="px-6 py-5">
                <p className="text-gray-700 whitespace-pre-line">
                  {job.requirments}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Company Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <FaBuilding className="text-blue-600 mr-2" />
                  Company Details
                </h3>
              </div>
              <div className="px-6 py-5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <span className="text-xl font-bold">
                      {job.company.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">{job.company}</h4>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                </div>
                <button className="w-full mt-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200">
                  View Company Profile
                </button>
              </div>
            </div>

            {/* Share Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <FaShareAlt className="text-blue-600 mr-2" />
                  Share This Job
                </h3>
              </div>
              <div className="px-6 py-5">
                <div className="flex justify-around">
                  <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200">
                    <FaFacebookF />
                  </button>
                  <button className="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-colors duration-200">
                    <FaTwitter />
                  </button>
                  <button className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors duration-200">
                    <FaLinkedinIn />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
          <div className="px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold text-gray-800">
                Interested in this job?
              </h3>
              <p className="text-gray-600">
                Apply now and get in touch with the employer
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md shadow-sm transition-colors duration-200">
              Apply for this position
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobDetails;
