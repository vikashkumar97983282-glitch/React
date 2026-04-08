import React from 'react'
import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App
