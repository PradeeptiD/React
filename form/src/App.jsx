import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import WelcomePage from './WelcomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/welcome/:name" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
