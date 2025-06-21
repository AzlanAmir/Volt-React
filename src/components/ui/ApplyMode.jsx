import React, { useState, useContext } from 'react';
import { ApplicationContext } from '../../context/ApplicationContext';
import { useNavigate } from 'react-router-dom';

const ApplyMode = ({ job, onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const { addApplication } = useContext(ApplicationContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    cv: null,
    company: job?.company || '',
    post: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0].name : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication(formData);
    onClose();
    navigate('/jobs');
  };

  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
        {!showForm ? (
          <>
            <h2 className="text-xl font-bold mb-4">Apply to {job.company}</h2>
            <p className="mb-6">Select how you want to apply:</p>

            <div className="space-y-4">
              <button
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setShowForm(true)}
              >
                Apply Manually
              </button>
              <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Apply with Account Info
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4">Manual Application</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                required
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
              <input
                type="text"
                name="post"
                placeholder="Post"
                required
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                required
                className="w-full"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit Application
              </button>
            </form>

          </>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 text-sm text-gray-600 underline hover:text-gray-800"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ApplyMode;
