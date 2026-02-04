import Contact from "./pages/contact"
import Home from "./pages/home"
import About from "./pages/about"
import Login from "./pages/login"
import {Routes,Route} from 'react-router-dom'


function App() {
  

  return (
    <>
      <div>
        <h1>hello vikash</h1>
        <Routes>
          <Route path='/' element={<Home/>}>home</Route>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
