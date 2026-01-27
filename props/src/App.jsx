import { useState } from 'react'
// import './App.css'
import Navbar from './component/navbar'
import Container from './component/card'

const App = ()=> {

  const data=[
    {
      user:"Vikash Kumar Sharma",
      skill: "AI/ML",
      img : "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=363&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    },
    {
      user:"Rahul Kumar",
      skill: "Frontend Developers",
      img : "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    },{
      user:"Gaurav Kumar Borad",
      skill: "AI/ML/DL",
      img : "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    },{
      user:"Rahul Kumar Yadav",
      skill: "Java Developers",
      img : "https://images.unsplash.com/photo-1635220035700-f2d881d763c2?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    },{
      user:"Vivek Tiwari",
      skill: "Web Developers",
      img : "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    },{
      user:"Narendra Yadav",
      skill: "Full-Stack Developers",
      img : "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    },{
      user:"Gautam Tharu",
      skill: "Network Engineer's",
      img : "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (infomation technology)"
    },{
      user:"Maheshwar",
      skill: "Devops Developers",
      img : "https://media.istockphoto.com/id/1946361636/photo/devops-software-development-operations-programmer-administration-system-life-cycle-quality.jpg?s=1024x1024&w=is&k=20&c=ytu0GTaNgWX4gfwq8Wi3devL_XiaWXhqmdzN1WgIa4M=",
      dept: "B Tech (infomation technology)"
    },{
      user:"Shivesh Kumar Singh",
      skill: "Flutter Developers",
      img : "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    },{
      user:"Prince Yadav",
      skill: "MERN-Stack",
      img : "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    },{
      user:"Ashif ali",
      skill: "DataScience",
      img : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    },{
      user:"Ram Prakash Kurmi",
      skill: "Cloud Computing",
      img : "https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?q=80&w=363&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    },{
      user:"Ankur Kumar Mandal",
      skill: "Full-Stack Developers",
      img : "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "Diploma (computer engineer)"
    },{
      user:"Ankit Mandal",
      skill: "Network Engineer's",
      img : "https://plus.unsplash.com/premium_photo-1673340683562-cb8e2ed0b195?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "Batchlor in computer application"
    },{
      user:"Raju Mandal",
      skill: "Web Developers",
      img : "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    },{
      user:"Tirth Devdutt",
      skill: "Android Developers",
      img : "https://images.unsplash.com/photo-1694878982190-6e37aa9eb306?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (infomation technology)"
    },{
      user:"Hardik",
      skill: "AI/ML",
      img : "https://plus.unsplash.com/premium_photo-1701113010437-1709c96aa539?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dept: "B Tech (computer engineer)"
    }
  ]

  return (
    <>
      <Navbar/>  
      <div className='proj'>
        {data.map(function(detail){
          return <Container user={detail.user} skill={detail.skill} img={detail.img} dept={detail.dept}/>
        })}
        
      </div>
    </>
  )
}

export default App
