import React, { useState } from 'react';
import ApplyMode from './ApplyMode'; // Ensure the path is correct
import amazon from '../../assets/amazon.jpg';
import microsoft from '../../assets/microsoft.avif';
import netflix from '../../assets/netflix.webp';
import google from '../../assets/google.webp';
import apple from '../../assets/apple.png';
import tesla from '../../assets/tesla.jpg';
import { Link } from 'react-router-dom';
export const jobs = [
    {
        id: 1,
        logo: amazon,
        company: 'Amazon',
        title: 'Frontend Developer',
        type: 'Full-Time',
        salary: '$120,000/year',
        location: 'Seattle, WA',
        description: 'Work with the latest frontend tech stack to build scalable e-commerce experiences.',
    },
    {
        id: 2,
        logo: microsoft,
        company: 'Microsoft',
        title: 'Backend Engineer',
        type: 'Part-Time',
        salary: '$60,000/year',
        location: 'Remote',
        description: 'Maintain backend services for Azure and work on scalable microservices.',
    },
    {
        id: 3,
        logo: netflix,
        company: 'Netflix',
        title: 'Software Engineering Intern',
        type: 'Internship',
        salary: '$25/hour',
        location: 'Los Gatos, CA',
        description: 'Join the summer internship program and contribute to real production features.',
    },
    {
        id: 4,
        logo: google,
        company: 'Google',
        title: 'AI/ML Engineer',
        type: 'Full-Time',
        salary: '$150,000/year',
        location: 'Mountain View, CA',
        description: 'Develop and deploy cutting-edge machine learning models across Google products.',
    },
    {
        id: 5,
        logo: apple,
        company: 'Apple',
        title: 'iOS Developer',
        type: 'Full-Time',
        salary: '$140,000/year',
        location: 'Cupertino, CA',
        description: 'Design and build applications for Apple devices with Swift and UIKit.',
    },
    {
        id: 6,
        logo: tesla,
        company: 'Tesla',
        title: 'Automation Engineer',
        type: 'Contract',
        salary: '$90,000/year',
        location: 'Austin, TX',
        description: 'Work on industrial automation solutions at Tesla Gigafactory with robotics and PLCs.',
    },
];
const Job = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* Modal Rendering */}
      {selectedJob && (
        <ApplyMode job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}

      <div className="flex flex-wrap justify-center gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white w-full sm:w-[47%] lg:w-[30%] shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
                <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4">{job.company}</h3>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-semibold text-black mb-1">{job.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                <div className="flex justify-between text-sm text-gray-700 mb-4">
                  <span className="bg-black text-white px-2 py-1 rounded">{job.type}</span>
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>

            <div className="px-5 pb-5">
                <button
                onClick={() => setSelectedJob(job)}
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}

        

      </div>
    </div>
  );
};

export default Job;
