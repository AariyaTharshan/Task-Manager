import React from 'react';

function DeleteTasks() {
  const items = localStorage.getItem('tasks');
  const tasks = items ? JSON.parse(items) : [];

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    window.location.reload();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Delete Tasks</h1>
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks available to delete.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tasks.map((task, index) => (
            <div 
              key={index} 
              className="relative flex items-center bg-gray-100 rounded-lg shadow-md w-full h-32 p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <span className="text-lg truncate flex-grow">{task.text}</span>
              <button 
                onClick={() => handleDeleteTask(index)} 
                className="bg-red-600 hover:bg-red-500 text-white w-20 h-full rounded-lg transition duration-200 flex items-center justify-center"
              >
                <span className="font-semibold">Delete</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DeleteTasks;
