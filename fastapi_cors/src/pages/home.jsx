import {useState,useEffect} from "react";
import axios from 'axios';

function Home(){
    const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


    return (
        <div>
            <h1>welcome to home page</h1>
            <h1>Hello World</h1>
            <h2>{data.message}</h2>
            <p>{data.status}</p>
        </div>
    )
}

export default Home;