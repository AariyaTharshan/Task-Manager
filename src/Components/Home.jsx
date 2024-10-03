import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('low');
  const [completed, setCompleted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      console.log(storedTasks);
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleSaveTask = () => {
    if (taskText.trim() === '') return;
    const newTask = { text: taskText, priority, completed };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    console.log(updatedTasks);
    setShowOverlay(false);
    setTaskText('');
    setPriority('low');
    setCompleted(false);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="flex justify-center p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="main-content w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Your To-Do List</h1>

        {/* Add Task Button */}
        <button
          onClick={() => setShowOverlay(true)}
          className="add-task-btn bg-blue-600 text-white px-4 py-2 rounded mb-6 w-full sm:w-auto sm:ml-auto block sm:inline-block"
        >
          Add Task
        </button>

        {/* Task List */}
        <div className="task-list space-y-4">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">No tasks yet. Add some!</p>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                className={`task-item flex items-center justify-between p-4 border rounded-md shadow-sm ${task.completed ? 'bg-green-100' : 'bg-white'}`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                    className="mr-4"
                  />
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
                </div>
                <span className={`ml-4 ${task.priority === 'high' ? 'text-red-500 font-bold' : 'text-green-500 font-bold'}`}>
                  {task.priority === 'high' ? 'High Priority' : 'Low Priority'}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Overlay (Modal) */}
        {showOverlay && (
          <div className="overlay fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="modal bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
              <h2 className="text-xl font-bold mb-4">Add New Task</h2>
              <input
                type="text"
                placeholder="Task description"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                className="p-2 border rounded w-full mb-4"
              />

              <div className="priority mb-4">
                <label className="mr-2">Priority:</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded w-full"
                >
                  <option value="high">High</option>
                  <option value="low">Low</option>
                </select>
              </div>

              <div className="completed mb-4">
                <label className="mr-2">Completed:</label>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => setCompleted(!completed)}
                />
              </div>

              <div className="actions flex justify-end">
                <button
                  onClick={() => setShowOverlay(false)}
                  className="mr-4 text-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveTask}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Save Task
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
