import React from 'react'
import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App
