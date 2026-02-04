import Contact from "./pages/contact"
import Home from "./pages/home"
import About from "./pages/about"
import Login from "./pages/login"
import Header from "./pages/header"
import {Routes,Route} from 'react-router-dom'


function App() {
  

  return (
    <>
      <div className="parent">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}>home</Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
