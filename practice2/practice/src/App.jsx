import React from 'react'
import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import AddProduct from './pages/addproduct'
import { Routes, Route } from 'react-router-dom'
import { RequireAuth } from './components/RouteGuards'
import Extra from './pages/extra'

function App() {
  return (
    <>
      <div>
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Route>
        </Routes> */}
        <Extra/>
      </div>
    </>
  )
}

export default App
