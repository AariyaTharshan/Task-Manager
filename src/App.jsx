import React from 'react';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import High from './Components/high';
import Low from './Components/low';
import Comp from './Components/comp';
import Incomp from './Components/incomp';
import Delete from './Components/delete'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar takes full width on mobile */}
          <Sidebar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/high" element={<High />} />
              <Route path="/low" element={<Low />} />
              <Route path="/comp" element={<Comp />} />
              <Route path="/incomp" element={<Incomp />} />
              <Route path="/delete-tasks" element={<Delete />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
