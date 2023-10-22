import React from 'react'

import {Route, Routes} from "react-router-dom"

import {Login} from "./pages/Login"
import {Chat} from "./pages/Chat"
import {AdminLogin} from "./pages/AdminLogin"
import {AdminPage} from "./pages/AdminPage";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPage />} />
      </Routes>
  );
}

export default App
