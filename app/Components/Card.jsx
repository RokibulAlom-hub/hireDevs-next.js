import Link from "next/link";
import { BiSolidInstitution } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
const Card = ({ data }) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
        <h2 className="text-2xl font-bold text-white truncate">{data?.title}</h2>
        <div className="flex items-center mt-2">
          <span className="bg-white bg-opacity-25 text-white text-sm px-3 py-1 rounded-full">
            {data?.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-blue-600">
          <BiSolidInstitution />
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-500">Company</p>
            <p className="font-medium text-gray-900">{data?.company}</p>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-blue-600">
          <CiLocationOn />
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium text-gray-900">{data?.location}</p>
          </div>
        </div>
        
        {/* <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-2">Requirements</h3>
          <p className="text-gray-600 text-sm">{data?.requirments}</p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{data?.description}</p>
        </div> */}
        
        <div className="mt-6">
          <Link href={`/pages/Jobs/${data?._id}`} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
