const getStoredJobApplication = () => {
  const storedJobApp = localStorage.getItem("job-applications");
  if (storedJobApp) {
    return JSON.parse(storedJobApp);
  }
  return [];
};

const SavedJobsApplication = (id) => {
  const storedJobApplication = getStoredJobApplication();
  const exists = storedJobApplication.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplication)
    );
  }
};

export { getStoredJobApplication, SavedJobsApplication };
