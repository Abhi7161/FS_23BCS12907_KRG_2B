import React from 'react';

const StudentCard = ({ student }) => {
  const { name, rollNumber, course } = student;

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">Roll Number: {rollNumber}</p>
      <p className="text-gray-600">Course: {course}</p>
    </div>
  );
};

const App = () => {
  const students = [
    { name: 'Abhi Kumar', rollNumber: '23BCS12907', course: 'Computer Science' },
    { name: 'Aryan Shrivastava', rollNumber: '23BBA12809', course: 'Business Administration' },
    { name: 'Mandeep Kaur', rollNumber: '23BEC12908', course: 'Electrical Engineering' },
    { name: 'Avreet Kaur', rollNumber: '23BME12909', course: 'Mechanical Engineering' },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Student Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
};

export default App;