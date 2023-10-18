import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsCalendar2Week } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { SavedJobsApplication } from "../utilities/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInit = parseInt(id);
  const job = jobs.find((job) => job.id == idInit);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
    job_title,
  } = job;

  const { phone, email, address } = contact_information;

  const handleApplyJob = () => {
    SavedJobsApplication(idInit);
    toast("You have Applied Successfully");
  };
  return (
    <div>
      {/* banner section */}
      <div className="text-center mt-12 text-2xl font-extrabold">
        <h1>Job Details</h1>
      </div>
      <div className="grid gap-8 md:grid-cols-4 my-[130px]">
        <div className="md:col-span-3">
          <p className="text-base font-medium text-[#757575] my-5">
            <span className="text-base font-extrabold text-black">
              Job Description:{" "}
            </span>
            {job_description}
          </p>
          <p className="text-base font-medium text-[#757575]">
            <span className="text-base font-extrabold text-black">
              Job Responsibility:{" "}
            </span>{" "}
            {job_responsibility}
          </p>
          <p className="text-base font-medium text-[#757575] my-5">
            <span className="text-base font-extrabold text-black">
              Educational Requirements:{" "}
            </span>{" "}
            <br />
            {educational_requirements}
          </p>
          <p className="text-base font-medium text-[#757575]">
            <span className="text-base font-extrabold text-black">
              Experiences:{" "}
            </span>{" "}
            <br />
            {experiences}
          </p>
        </div>
        <div className="">
          <h3 className="text-xl font-extrabold">Job Details</h3>
          <hr className="my-3 bg-[#9873FF]" />
          {/* salary */}
          <div className="flex gap-x-2 items-center my-3">
            <div className="flex gap-x-2 items-center">
              <AiOutlineDollarCircle className="text-[#9873FF] text-2xl"></AiOutlineDollarCircle>
              <h3 className="text-lg font-bold text-[#474747]">Salary:</h3>
            </div>
            <p className="text-lg font-semibold text-[#757575]">
              {salary} <span className="font-medium">{"(Per Month)"}</span>
            </p>
          </div>
          {/* job title */}
          <div className="flex gap-x-2 items-center my-3 mb-7">
            <div className="flex gap-x-2 items-center">
              <BsCalendar2Week className="text-[#9873FF] text-xl"></BsCalendar2Week>
              <h3 className="text-base font-bold text-[#474747]">
                Job Title:{" "}
              </h3>
            </div>
            <p className="text-base font-semibold text-[#757575]">
              {job_title}
            </p>
          </div>
          <h3 className="text-xl font-extrabold">Contact Information</h3>
          <hr className="my-3 bg-[#9873FF]" />
          {/* phone */}
          <div className="flex gap-x-2 items-center my-3">
            <div className="flex gap-x-2 items-center">
              <BsTelephone className="text-[#9873FF] text-2xl"></BsTelephone>
              <h3 className="text-lg font-bold text-[#474747]">Phone: </h3>
            </div>
            <p className="text-base font-semibold text-[#757575]">{phone}</p>
          </div>
          {/* email */}
          <div className="flex gap-x-2 items-center my-3">
            <div className="flex gap-x-2 items-center">
              <MdOutlineMail className="text-[#9873FF] text-2xl"></MdOutlineMail>
              <h3 className="text-lg font-bold text-[#474747]">Email: </h3>
            </div>
            <p className="text-base font-semibold text-[#757575]">{email}</p>
          </div>
          {/* address */}
          <div className="my-3">
            <div className="flex gap-x-2">
              <IoLocationOutline className="text-[#9873FF] text-3xl"></IoLocationOutline>
              <h3 className="text-lg font-bold text-[#474747]">
                Address:{" "}
                <span className="text-base font-semibold text-[#757575]">
                  {address}
                </span>
              </h3>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button
              onClick={handleApplyJob}
              className="btn px-[120px] bg-gradient-to-r from-blue-400 to-purple-700 text-white py-3"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
