import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './vendorDashboard/pages/LandingPage';
import NavBar from './vendorDashboard/components/NavBar';
import Login from './vendorDashboard/components/forms/Login';
import NotFound from './vendorDashboard/components/NotFound';

import "./App.css";

const App = () => {
  return (
   <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      </>
  );
};

export default App;
