// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PlantTree from './pages/PlantTree';
import TrackProgress from './pages/TrackProgress';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plant-tree" element={<PlantTree />} />
      <Route path="/track-progress" element={<TrackProgress />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
