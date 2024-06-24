import React from 'react';

const JobListing = () => {
  return (
    <div className="bg-white shadow-md rounded p-6 mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Senior Product Designer</h2>
        <span className="text-green-500">Open</span>
      </div>
      <div className="text-gray-600">
        <p>Location: Delaware, USA</p>
        <p>Salary: $300k-$400k</p>
        <p>Experience: 3+ Years</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">About the Job</h3>
        <ul className="list-disc list-inside">
          <li>Handle the UI/UX research design</li>
          <li>Work on researching about web applications designs & trends</li>
          <li>Work on conceptualizing and visualizing</li>
          <li>Work on creating graphics content and other graphics related works</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Health Insurance</li>
          <li>Internet Fund</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Supplementary Pay Types</h3>
        <ul className="list-disc list-inside">
          <li>Performance Bonus</li>
          <li>Yearly Bonus</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Company Details</h3>
        <p>Atlassian</p>
        <p>Industry: Information Technology, Infrastructure</p>
        <p>Founded: 2019</p>
        <p>Founders: Scott Farquhar, Mike Cannon-Brookes</p>
      </div>
    </div>
  );
};

export default JobListing;
