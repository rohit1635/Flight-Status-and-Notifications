import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FlightStatus from './components/FlightStatus';
import NotificationPanel from './components/NotificationPanel';
import './App.css'; // Import the CSS file
import logo from './icIndigoLogoWhiteR-new.svg'; // Import the logo

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <img src={logo} alt="Indigo Logo" className="logo" />
          <h1 className="title">Flight Status and Notifications System</h1>
        </header>
        <nav className="nav">
          <Link to="/flights" className="nav-link">Flight Status</Link>
          <Link to="/notifications" className="nav-link">Notifications</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/flights" element={<FlightStatus />} />
            <Route path="/notifications" element={<NotificationPanel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
