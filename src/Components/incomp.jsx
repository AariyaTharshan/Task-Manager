import React from 'react';

function Incomp() {
  const items = localStorage.getItem('tasks');
  const incompletedTasks = items ? JSON.parse(items).filter(task => task.completed === false) : [];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Not Completed Tasks
      </h1>

      {incompletedTasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks to be completed.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {incompletedTasks.map((task, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-red-400 flex flex-col justify-between"
            >
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800">{task.text}</h2>
              </div>
              <div className="border-t pt-2 text-right">
                <span className="text-red-600 font-medium">Yet to be Completed</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Incomp;
