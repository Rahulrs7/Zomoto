import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './suby/pages/LandingPage';
import ProductMenu from './suby/components/ProductMenu';
import Login from './suby/pages/Login';
import Register from './suby/pages/Register';

import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:firmId/:firmName" element={<ProductMenu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
