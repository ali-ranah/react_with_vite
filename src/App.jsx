import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Header from './Header';
import Chart from './Chart';

const App = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Dashboard />
      <Chart/>
      </>
   
  );
};

export default App;
