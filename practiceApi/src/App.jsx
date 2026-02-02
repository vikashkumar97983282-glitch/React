

const App = ()=> {

  const getdata = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(response)
    const data = await response.json()
    console.log(data)
  }

  return (
    <>
      <div>
        <button onClick={getdata}>apiCall</button>
      </div>
    </>
  )
}

export default App
