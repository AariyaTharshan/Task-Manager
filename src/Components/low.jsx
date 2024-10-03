import React from 'react';

const Low = () => {
  const items = localStorage.getItem('tasks');
  const lowtasks = items ? JSON.parse(items).filter(task => task.priority === 'low') : [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Low Priority Tasks</h1>
      {lowtasks.length === 0 ? (
        <p className="text-gray-500 text-center">No Low priority tasks available.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lowtasks.map((task, index) => (
            <li 
              key={index} 
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <div className="flex justify-between">
                <span className="font-medium">{task.text}</span>
                <span className="text-green-500 font-semibold">Priority: {task.priority}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Low;
