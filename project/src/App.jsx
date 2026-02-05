import Login from "./Login/login"
import Forget from './forget/forget'
import Home from "./home/home"
import {Routes,Route} from 'react-router-dom'


const App = ()=> {

  return (
    <>
      <div className='app'>
        {/* <Login/> */}
        {/* <Forget/> */}
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/forget" element={<Forget/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
