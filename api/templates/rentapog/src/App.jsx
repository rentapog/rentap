
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AffiliateProgram from './pages/AffiliateProgram';
import Blog from './pages/Blog';
import Packages from './pages/Packages';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserNotRegisteredError from './components/UserNotRegisteredError';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/not-registered" element={<UserNotRegisteredError />} />
        </Routes>
      </Layout>
    </Router>
  );
}
