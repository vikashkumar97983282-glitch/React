import React from 'react'
import './index.css'
import First from './component/container'
import Navbar from './component/navbar'

function App() {


  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className='parent'>
      <First/>
      <First/>
      <First/>
      <First/>
      <First/>
      <First/>
      </div>
    </>
  )
}

export default App
