// Widgets.js
import React from 'react';

const UserStatisticCard = ({ title, stat }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{stat}</p>
    </div>
  );
};

const TableCard = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h3 className="text-lg font-semibold mb-4">User Table</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 py-2">Name</th>
            <th className="border-b-2 border-gray-300 py-2">Age</th>
            <th className="border-b-2 border-gray-300 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border-b border-gray-300 py-2">{user.name}</td>
              <td className="border-b border-gray-300 py-2">{user.age}</td>
              <td className="border-b border-gray-300 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UserStatisticsPage = () => {
  const userStats = [
    { title: 'Total Users', stat: 100 },
    { title: 'Active Users', stat: 75 },
    { title: 'Inactive Users', stat: 25 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {userStats.map((stat, index) => (
          <UserStatisticCard key={index} title={stat.title} stat={stat.stat} />
        ))}
      </div>
    </div>
  );
};

const UserTablePage = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-8">
        <TableCard data={data} />
      </div>
    </div>
  );
};

export { UserStatisticCard, TableCard, UserStatisticsPage, UserTablePage };
