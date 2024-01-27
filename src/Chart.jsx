import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { date: 'Jan', earnings: 6.5 },
  { date: 'Feb', earnings: 7.357 },
  { date: 'Mar', earnings: 6 },
  { date: 'Apr', earnings: 6.987 },
  { date: 'May', earnings: 5.5 },
  { date: 'Jun', earnings: 5 },
  { date: 'Jul', earnings: 4.5 },
  { date: 'Aug', earnings: 4 },
  { date: 'Sep', earnings: 3.5 },
  { date: 'Oct', earnings: 3 },
  { date: 'Nov', earnings: 2.5 },
  { date: 'Dec', earnings: 2 },
];

const Chart = () => {
  return (
    <div style={{marginLeft:'20%'}}>
    <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Line type="monotone" dataKey="earnings" stroke="#888" strokeWidth={4} />
      <Tooltip />
      <Legend />
    </LineChart>
    </div>
  );
};

export default Chart;
