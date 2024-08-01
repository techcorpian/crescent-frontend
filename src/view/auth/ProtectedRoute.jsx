import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../../services/auth.service.jsx';

const ProtectedRoute = ({ children }) => {
  const currentUser = AuthService.getCurrentUser();

  // console.log(currentUser);

  return currentUser ? children : <Navigate to="/portal/login" />;
};

export default ProtectedRoute;
