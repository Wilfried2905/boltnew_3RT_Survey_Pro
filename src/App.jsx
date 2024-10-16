import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Survey from './components/Survey';
import PrivacyPolicy from './components/PrivacyPolicy';
import ClientIdentification from './components/ClientIdentification';
import RoomInformation from './components/RoomInformation';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
          } />
          <Route path="/dashboard" element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/" />
          } />
          <Route path="/survey" element={
            isAuthenticated ? <Survey /> : <Navigate to="/" />
          } />
          <Route path="/privacy-policy" element={
            isAuthenticated ? <PrivacyPolicy /> : <Navigate to="/" />
          } />
          <Route path="/client-identification" element={
            isAuthenticated ? <ClientIdentification /> : <Navigate to="/" />
          } />
          <Route path="/room-information" element={
            isAuthenticated ? <RoomInformation /> : <Navigate to="/" />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
