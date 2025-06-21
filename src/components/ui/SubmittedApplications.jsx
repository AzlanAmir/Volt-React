import React, { useContext, useState } from 'react';
import { ApplicationContext } from '../../context/ApplicationContext';
import { jobs } from './Jobs';

const SubmittedApplications = () => {
  const { applications } = useContext(ApplicationContext);
  const [selectedCompany, setSelectedCompany] = useState('All');

  const uniqueCompanies = ['All', ...new Set(jobs.map(job => job.company))];

  const filteredApplications =
    selectedCompany === 'All'
      ? applications
      : applications.filter(app => app.company === selectedCompany);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Submitted Applications</h2>
        <div className="flex items-center space-x-2">
          <label htmlFor="companyFilter" className="text-gray-600 font-medium">
            Filter by Company:
          </label>
          <select
            id="companyFilter"
            className="border border-gray-300 rounded px-3 py-1 text-sm"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            {uniqueCompanies.map((company, idx) => (
              <option key={idx} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredApplications.length === 0 ? (
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded shadow text-center">
          No applications submitted for this company.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Country</th>
                <th className="text-left py-3 px-4">Company</th>
                <th className="text-left py-3 px-4">Post</th>
                <th className="text-left py-3 px-4">CV File</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app, index) => (
                <tr
                  key={index}
                  className={`border-b hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                >
                  <td className="py-3 px-4">{app.name}</td>
                  <td className="py-3 px-4">{app.email}</td>
                  <td className="py-3 px-4">{app.country}</td>
                  <td className="py-3 px-4">{app.company}</td>
                  <td className="py-3 px-4">{app.post}</td>
                  <td className="py-3 px-4">
                    <span className="text-blue-600 underline cursor-pointer">
                      {app.cv ? app.cv.name || app.cv : 'Uploaded'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SubmittedApplications;
