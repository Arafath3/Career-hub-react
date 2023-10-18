import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    salary,
    location,
    job_type,
  } = job;
  return (
    <div>
      <div className="mt-6 mb-28">
        {/* hero */}
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={logo} className="" />
            <div>
              <h1 className="text-2xl font-extrabold">{job_title}</h1>
              <p className="py-6">{company_name}</p>
              {/* remote and onsite button */}
              <div className="flex gap-3 text-base font-extrabold my-2">
                <button className="px-4 py-2 text-[#7E90FE] border border-[#7E90FE]">
                  {remote_or_onsite}
                </button>
                <div>
                  <button className="px-4 py-2 text-[#7E90FE] border border-[#7E90FE]">
                    {job_type}
                  </button>
                </div>
              </div>
              {/* location  */}
              <div className="flex justify-start items-center gap-x-5 my-2 text-[#757575]">
                <div>
                  <p className="flex">
                    <IoLocationOutline className="text-2xl"></IoLocationOutline>
                    <span className="text-xl font-semibold ">{location}</span>
                  </p>
                </div>
                <div>
                  <p className="flex">
                    <AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>
                    <span className="text-xl font-semibold">{salary}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* view details button here */}
            <div className="flex justify-end">
              <Link to={`/job/${id}`}>
                <button className="btn bg-gradient-to-r from-blue-400 to-purple-700 text-white py-2 px-4 rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
AppliedJob.propTypes = {
  job: PropTypes.object.isRequired,
};
export default AppliedJob;
