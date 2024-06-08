import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarMenu from './components/layout/Sidebar';
import TestText from './components/test/TestText';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <SidebarMenu />
        <div className="flex-1 m-5">
          <Routes>
            <Route path="/" element={<TestText text="Home" />} />
            <Route path="/about" element={<TestText text="About" />} />
            <Route path="/contact" element={<TestText text="Contact" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
