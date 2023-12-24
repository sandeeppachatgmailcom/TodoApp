import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import { AuthProvider } from './authentication/authentication';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
