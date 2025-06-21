import React from 'react';

const Transactions = () => {
  const transactions = [
    {
      id: 'TXN001',
      user: 'Ali Raza',
      date: '2025-06-20',
      amount: 2500,
      status: 'Paid',
    },
    {
      id: 'TXN002',
      user: 'Zainab Khan',
      date: '2025-06-19',
      amount: 1800,
      status: 'Pending',
    },
    {
      id: 'TXN003',
      user: 'Ahmed Shah',
      date: '2025-06-18',
      amount: 3200,
      status: 'Failed',
    },
    {
      id: 'TXN004',
      user: 'Sara Malik',
      date: '2025-06-17',
      amount: 4000,
      status: 'Paid',
    },
    {
      id: 'TXN005',
      user: 'Junaid Akram',
      date: '2025-06-16',
      amount: 2200,
      status: 'Pending',
    },
     {
      id: 'TXN006',
      user: 'Ali Raza',
      date: '2025-06-20',
      amount: 2500,
      status: 'Paid',
    },
    {
      id: 'TXN007',
      user: 'Zainab Khan',
      date: '2025-06-19',
      amount: 1800,
      status: 'Pending',
    },
    {
      id: 'TXN008',
      user: 'Ahmed Shah',
      date: '2025-06-18',
      amount: 3200,
      status: 'Failed',
    },
    {
      id: 'TXN009',
      user: 'Sara Malik',
      date: '2025-06-17',
      amount: 4000,
      status: 'Paid',
    },
    {
      id: 'TXN010',
      user: 'Junaid Akram',
      date: '2025-06-16',
      amount: 2200,
      status: 'Pending',
    },
     {
      id: 'TXN011',
      user: 'Ali Raza',
      date: '2025-06-20',
      amount: 2500,
      status: 'Paid',
    },
    {
      id: 'TXN012',
      user: 'Zainab Khan',
      date: '2025-06-19',
      amount: 1800,
      status: 'Pending',
    },
    {
      id: 'TXN013',
      user: 'Ahmed Shah',
      date: '2025-06-18',
      amount: 3200,
      status: 'Failed',
    },
    {
      id: 'TXN014',
      user: 'Sara Malik',
      date: '2025-06-17',
      amount: 4000,
      status: 'Paid',
    },
    {
      id: 'TXN015',
      user: 'Junaid Akram',
      date: '2025-06-16',
      amount: 2200,
      status: 'Pending',
    },
  ];

  const statusClass = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Failed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Transactions</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border-b">Transaction ID</th>
              <th className="text-left p-3 border-b">User</th>
              <th className="text-left p-3 border-b">Date</th>
              <th className="text-left p-3 border-b">Amount (PKR)</th>
              <th className="text-left p-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{txn.id}</td>
                <td className="p-3 border-b">{txn.user}</td>
                <td className="p-3 border-b">{txn.date}</td>
                <td className="p-3 border-b">Rs {txn.amount.toLocaleString()}</td>
                <td className="p-3 border-b">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${statusClass(
                      txn.status
                    )}`}
                  >
                    {txn.status}
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

export default Transactions;
