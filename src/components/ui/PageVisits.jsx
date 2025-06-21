import React from 'react';

const PageVisits = () => {
  const data = [
    {
      pageName: "/landing-page",
      views: 3500,
      value: "$402",
      bounceRate: "30.5%",
    },
    {
      pageName: "/profile",
      views: 1200,
      value: "$120",
      bounceRate: "45.2%",
    },
    {
      pageName: "/dashboard",
      views: 2750,
      value: "$320",
      bounceRate: "28.1%",
    },
    {
      pageName: "/contact-us",
      views: 980,
      value: "$80",
      bounceRate: "52.3%",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Page Visits</h2>
        <button className="text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          See All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Page Name</th>
              <th className="px-4 py-3">Page Views</th>
              <th className="px-4 py-3">Page Value</th>
              <th className="px-4 py-3">Bounce Rate</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((row, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-3">{row.pageName}</td>
                <td className="px-4 py-3">{row.views}</td>
                <td className="px-4 py-3">{row.value}</td>
                <td className="px-4 py-3">{row.bounceRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageVisits;


