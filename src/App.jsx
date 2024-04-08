import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import UserTables from './components/UserTables/UserTables.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwtToken = Cookies.get('jwt'); 
    setIsLoggedIn(!!jwtToken); 
  }, []);
  return (
      /*<div>
        {isLoggedIn ? <Home /> : <Login />}     </div>*/
        <Router>
          <Routes>
          <Route exact path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route exact path="/tables" element={isLoggedIn ? <UserTables /> : <Login />} />
          </Routes>
        </Router>
  )
  }
export default App
