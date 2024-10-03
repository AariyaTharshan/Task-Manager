import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="lg:hidden p-4 text-white bg-gray-800" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <div 
        className={`sidebar bg-gray-900 text-white min-h-screen w-64 p-6 shadow-xl lg:flex flex-col justify-between ${
          isOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        <div className="sidebar__header mb-4">
          <h1 className="text-3xl font-bold text-center">
            <Link to="/" className="text-white hover:text-gray-300">To-Do List</Link>
          </h1>
        </div>

        <div className="sidebar__content flex-grow space-y-8">
          <div className="tasks mb-4">
            <h2 className="text-lg font-semibold tracking-wide uppercase">Tasks</h2>
            <div className="priority mt-3">
              <h3 className="text-sm font-semibold text-gray-400">Priority</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link to="high" className="block px-4 py-2 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-150">High Priority</Link>
                </li>
                <li>
                  <Link to="low" className="block px-4 py-2 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-150">Low Priority</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="status">
            <h3 className="text-sm font-semibold text-gray-400">Status</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="comp" className="block px-4 py-2 text-sm rounded-lg bg-green-600 hover:bg-green-500 transition duration-150">Completed</Link>
              </li>
              <li>
                <Link to="incomp" className="block px-4 py-2 text-sm rounded-lg bg-red-600 hover:bg-red-500 transition duration-150">Incomplete</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="delete-task mt-4">
          <Link to="/delete-tasks" className="block px-4 py-2 text-sm rounded-lg bg-red-600 hover:bg-red-500 transition duration-150">Delete Tasks</Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
