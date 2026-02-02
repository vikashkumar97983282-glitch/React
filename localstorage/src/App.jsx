import React from "react"


const App = ()=> {

  // clear localStorage
  // localStorage.clear();
  // // clear sessionStorage
  // sessionStorage.clear();

  // // localStorage set data
  // localStorage.setItem("user","adarsh");
  // localStorage.setItem("age",18)

  // // localStorage get data
  // const user = localStorage.getItem("user");
  // const age = localStorage.getItem("age")
  // console.log(age)
  // console.log(user)

  // localStorage remove for remove data
  // localStorage.removeItem('user')
  // localStorage.removeItem('age')


  // to save objects in string form
  const user = {
    name : "vikash kumar",
    age : 18,
    dept : "computer engineering"
  }

  localStorage.setItem("user", JSON.stringify(user))

  // // to return localStorage object
  // const userval = localStorage.getItem('user')
  // console.log(userval)
  // console.log(typeof(userval))

  // to convert into object form
  const userval = JSON.parse(localStorage.getItem('user'))
  console.log(userval)
  console.log(typeof(userval))




  return (
    <>
      <div>
        <h1>local Storage</h1>
        <input type="text" />
      </div>
    </>
  )
}

export default App
