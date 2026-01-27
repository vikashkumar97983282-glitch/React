import { useState } from 'react'
// import './App.css'
import Navbar from './component/navbar'
import Container from './component/card'

const App = ()=> {

  return (
    <>
      <Navbar/>  
      <div className='proj'>
        <Container user='Vikash Kumar' skill='AI/ML' img="https://plus.unsplash.com/premium_photo-1683120963435-6f9355d4a776?q=80&w=363&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

        <Container user='Rahul Kumar' skill='full-stack' img="https://images.unsplash.com/photo-1747409020057-23556b36b38a?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

        <Container user='Gaurav Kumar' skill='AI/ML' img="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

        <Container user='Ashif ali' skill='Data Science' img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        
        <Container user='Vivek Kumar' skill='AI/ML' img="https://plus.unsplash.com/premium_photo-1683120963435-6f9355d4a776?q=80&w=363&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

        
      </div>
    </>
  )
}

export default App
