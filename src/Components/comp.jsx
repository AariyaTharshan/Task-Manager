import React from 'react';

function comp() {
  const items = localStorage.getItem('tasks');
  const completedTasks = items ? JSON.parse(items).filter(task => task.completed === true) : [];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Not Completed Tasks
      </h1>

      {completedTasks.length === 0 ? (
        <p className="text-gray-500 text-center">No Tasks completed.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {completedTasks.map((task, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-green-400 flex flex-col justify-between"
            >
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800">{task.text}</h2>
              </div>
              <div className="border-t pt-2 text-right">
                <span className="text-green-600 font-medium">Completed Successfully</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default comp;
