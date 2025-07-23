import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import './App.css';
import ErrorBoundary from './components/ErrorFallback';

function App() {
  return (
    <>
      <h1 id="home-heading">Hello, here is our Movies Home Page</h1>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
