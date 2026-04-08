import Login from "./Login/login";
import Forget from './forget/forget';
import Home from "./home/home";
import About from "./home/about";
import Form from "./home/form";
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from "./hooks/user-context";


const App = () => {



  return (
    <>
      <UserProvider>
        <div className='app'>
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
          </Routes>

        </div>
      </UserProvider>
    </>
  );
}

export default App;