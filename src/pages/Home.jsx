import React from 'react';
import { UserStatisticsPage, UserTablePage } from '../components/widgets';

const Home = () => {
  const userData = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Doe', age: 25, email: 'jane@example.com' },
    { name: 'Bob Smith', age: 40, email: 'bob@example.com' },
  ];

  return (
    <div>
      <UserStatisticsPage />
      <UserTablePage data={userData} />
    </div>
  );
};

export default Home;
