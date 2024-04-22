import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Protected from './components/ProtectedRoutes';
import Home from './pages/Home';
import Products from './pages/product';
import Logout from './pages/Logout';
import Sales from './pages/Sales';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<Protected />}>
            <Route path="/products" element={<Products />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />


          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
