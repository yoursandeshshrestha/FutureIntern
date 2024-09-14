import JobRow from "./Jobrow";

export default function Jobs() {
  return (
    <>
      <div className="bg-gray-100 p-8 rounded-xl">
        <h2 className="font-bold mb-4">Recent Jobs</h2>
        <div className="flex flex-col gap-4">
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
        </div>
      </div>
    </>
  );
}
