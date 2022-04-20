import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import {fetchUser, userAccessToken } from "./utils/fetchUser";
import Login from './Container/Login';
import Home from './Container/Home';


const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

//useEffect will take two diff. inputs one is function and the other one is dependencies
  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) {
      navigate("/login", { replace: true });
    }  else {
      const [userInfo] = fetchUser();
      setUser(userInfo);
    }
  }, []);
  return (
   <Routes> 
     <Route path="login" element={<Login />} />
     <Route path="/*" element={<Home user={user} />} />
   </Routes>
  );
};

export default App;