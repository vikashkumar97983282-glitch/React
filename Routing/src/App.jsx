import Contact from "./pages/contact"
import Home from "./pages/home"
import About from "./pages/about"
import Login from "./pages/login"
import Header from "./pages/header"
import {Routes,Route, Router} from 'react-router-dom'
import Site from "./pages/about/site"
import Admin from "./pages/about/admin"
import User from "./pages/about/user"


function App() {
  

  return (
    <>
      <div className="parent">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}>home</Route>
          <Route path="/about" element={<About/>}>
            <Route path="site" element={<Site/>}></Route>
            <Route path="admin" element={<Admin/>}></Route>
            <Route path="user" element={<User/>}></Route>
          </Route>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
