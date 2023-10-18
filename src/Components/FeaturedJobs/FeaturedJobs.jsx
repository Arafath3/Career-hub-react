import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
        <p className="text-base font-medium text-[#757575] mt-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {jobs.slice(0, dataLength).map((job) => (
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        ))}
      </div>
      <div
        className={dataLength === jobs.length ? "hidden" : "text-center my-12"}
      >
        <button
          className="btn bg-gradient-to-r from-blue-400 to-purple-700 text-white rounded-lg"
          onClick={() => setDataLength(dataLength.length)}
        >
          Show ALL
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
