import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Home(){
    const [data, setData] = useState({});

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] =useState("")

    const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/");
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handlelogin = async()=>{
    try{
        const response = await axios.post('http://127.0.0.1:8000/login',{
            email:email.trim(),
            password:password.trim()
        })
        setMessage(response.data.message)
        // console.log(response.data)
        navigate('/about')

    } catch(error){
        console.error(error)
        setMessage("login failed")
    }
  }




    return (
        <div className="min-h-screen bg-slate-100 p-6">
            <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-md">
                <h1 className="text-2xl font-bold text-slate-800">Welcome to our test page!</h1>
                <p className="mt-2 text-sm text-emerald-600">{data.message}</p>
                <p className="text-sm text-slate-500">{data.status}</p>
            </div>

            <div className="mx-auto mt-6 max-w-md rounded-xl bg-slate-800 p-6 text-white shadow-md">
                <h1 className="text-xl font-semibold">login page</h1>
                <input className="mt-4 w-full rounded border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder:text-slate-400" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input className="mt-3 w-full rounded border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder:text-slate-400" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button className="mt-4 rounded bg-emerald-500 px-4 py-2 font-medium text-white hover:bg-emerald-600" onClick={handlelogin}>submit</button>
                <p className="mt-3 text-sm text-slate-300">{message}</p>
            </div>
        </div>
    )
}

export default Home;