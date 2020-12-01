import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import postListPage from './pages/PostListPage';
import MapPage from './MapPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return(
    <>
      <Route component={ HomePage } path="/" />
      <Route component={ postListPage } path="/post"/>
      <Route component={ MapPage } path="/map" />
      <Route component={ MyPage } path="/auth" />
      <Route component={ LoginPage } path="/auth/login" />
      <Route component={ RegisterPage } path="/auth/register" />
    </>
  )
}

export default App;