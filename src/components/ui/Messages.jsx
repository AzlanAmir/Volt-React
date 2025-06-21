import React from 'react';

const Messages = () => {
  const queries = [
  {
    id: 1,
    employee: 'Ali Raza',
    time: '09:45 AM',
    message: 'I need access to the HR portal.',
    status: 'Pending',
  },
  {
    id: 2,
    employee: 'Zainab Khan',
    time: '10:15 AM',
    message: 'Can I get a leave approval update?',
    status: 'Reviewed',
  },
  {
    id: 3,
    employee: 'Ahmed Shah',
    time: '11:00 AM',
    message: 'My salary slip for last month is incorrect.',
    status: 'Resolved',
  },
  {
    id: 4,
    employee: 'Sara Malik',
    time: '12:30 PM',
    message: 'I want to update my emergency contact info.',
    status: 'Pending',
  },
  {
    id: 5,
    employee: 'Ali Raza',
    time: '01:05 PM',
    message: 'The HR portal is still showing an error when I log in.',
    status: 'Pending',
  },
  {
    id: 6,
    employee: 'Zainab Khan',
    time: '01:45 PM',
    message: 'I submitted my travel reimbursement form but haven’t heard back.',
    status: 'Reviewed',
  },
  {
    id: 7,
    employee: 'Ahmed Shah',
    time: '02:10 PM',
    message: 'When will the new ID cards be distributed?',
    status: 'Resolved',
  },
  {
    id: 8,
    employee: 'Sara Malik',
    time: '02:45 PM',
    message: 'Can you confirm if my tax documents have been received?',
    status: 'Pending',
  },
  {
    id: 9,
    employee: 'Ali Raza',
    time: '03:00 PM',
    message: 'Please update my email to the new company domain.',
    status: 'Pending',
  },
  {
    id: 10,
    employee: 'Zainab Khan',
    time: '03:25 PM',
    message: 'The dashboard in my employee portal is not loading.',
    status: 'Reviewed',
  },
  {
    id: 11,
    employee: 'Ahmed Shah',
    time: '04:00 PM',
    message: 'How do I enroll in the medical insurance plan?',
    status: 'Resolved',
  },
  {
    id: 12,
    employee: 'Sara Malik',
    time: '04:30 PM',
    message: 'I need a letter for my bank confirming my employment.',
    status: 'Pending',
  },
];


  // status badge styling
  const statusClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Reviewed':
        return 'bg-blue-100 text-blue-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Messages</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border-b border-gray-300">#</th>
              <th className="text-left p-3 border-b border-gray-300">Employee</th>
              <th className="text-left p-3 border-b border-gray-300">Time</th>
              <th className="text-left p-3 border-b border-gray-300">Message</th>
              <th className="text-left p-3 border-b border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((q, index) => (
              <tr key={q.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{index + 1}</td>
                <td className="p-3 border-b">{q.employee}</td>
                <td className="p-3 border-b">{q.time}</td>
                <td className="p-3 border-b">{q.message}</td>
                <td className="p-3 border-b">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${statusClass(
                      q.status
                    )}`}
                  >
                    {q.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
