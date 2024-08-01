import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './view/home/pages/Home';
import Login from './view/auth/Login';
import Users from './view/portal/masters/pages/Users';
import AddUsers from './view/portal/masters/pages/AddUsers';
import Usergroups from './view/portal/masters/pages/Usergroups';
import AddUsergroups from './view/portal/masters/pages/AddUsergroups';
import Permissions from './view/portal/masters/pages/Permissions';
import AddPermissions from './view/portal/masters/pages/AddPermissions';
import StudentsList from './view/portal/students/pages/StudentsList';
import StudentView from './view/portal/students/pages/StudentView';
import Dashboard from './view/portal/dashboard/pages/Dashboard';
import ProtectedRoute from './view/auth/ProtectedRoute';
import Menu from './view/shared/UIElements/Menu';
import MainNavigation from './view/shared/Components/MainNavigation'
import Footer from './view/shared/UIElements/Footer';
import './App.css'
function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && location.pathname !== '/portal/login' ?  <MainNavigation /> : <Menu />}

      {/* {location.pathname !== '/portal/login' ? <Menu /> : <MainNavigation />} */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/portal/login" element={<Login />} />
        <Route path='/portal' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/students' element={<ProtectedRoute><StudentsList /></ProtectedRoute>} />
        <Route path='/students/:id' element={<ProtectedRoute><StudentView /></ProtectedRoute>} />
        <Route path='/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path='/add-users' element={<ProtectedRoute><AddUsers /></ProtectedRoute>} />
        <Route path='/usergroups' element={<ProtectedRoute><Usergroups /></ProtectedRoute>} />
        <Route path='/add-usergroups' element={<ProtectedRoute><AddUsergroups /></ProtectedRoute>} />
        <Route path='/permissions' element={<ProtectedRoute><Permissions /></ProtectedRoute>} />
        <Route path='/add-permissions' element={<ProtectedRoute><AddPermissions /></ProtectedRoute>} />
      </Routes>
      {location.pathname == '/' ? <Footer /> : ''}
      
    </>
  );
}

export default AppWrapper;
