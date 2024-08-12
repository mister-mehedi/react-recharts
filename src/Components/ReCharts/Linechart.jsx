import React from 'react';
import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const Linechart = () => {
  const studentData = [
    { id: 1, name: 'Student A', math: 85, physics: 78, chemistry: 92 },
    { id: 2, name: 'Student B', math: 72, physics: 85, chemistry: 75 },
    { id: 3, name: 'Student C', math: 91, physics: 70, chemistry: 88 },
    { id: 4, name: 'Student D', math: 68, physics: 82, chemistry: 71 },
    { id: 5, name: 'Student E', math: 80, physics: 75, chemistry: 85 },
    { id: 6, name: 'Student F', math: 75, physics: 88, chemistry: 78 },
    { id: 7, name: 'Student G', math: 95, physics: 72, chemistry: 90 },
    { id: 8, name: 'Student H', math: 63, physics: 80, chemistry: 73 },
    { id: 9, name: 'Student I', math: 88, physics: 77, chemistry: 86 },
    { id: 10, name: 'Student J', math: 78, physics: 83, chemistry: 79 }
  ];


  return (
    <div>
      <LChart width={700} height={400} data={studentData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke='red'></Line>
        <Line dataKey="physics" stroke='yellow'></Line>
        <Line dataKey="chemistry" stroke='blue'></Line>
        <Tooltip></Tooltip>
      </LChart>

    </div>
  );
};

export default Linechart;