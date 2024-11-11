import React, { useState, useEffect } from 'react';
import styles from './Users.module.css';
import User from '../User/User';



function Users({ name, age, isAdmin }) {
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState()
  const [uname, setUname] = useState()
  const [username, setUsername] = useState()
  const [users, setUsers] = useState([
    {id: 1, name: "Mike Kamal", location: "Nairobi",email:"kamal@moringaschool.com", username:"kamal" },
    { id: 2, name: "Max ", location: "Dubai",email:"max@moringaschool.com", username:"max" }])

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((r) => r.json())
      .then((data) => {
        setUsers(data)

      })
  }, [])
  console.log(users)

  useEffect(() => {

  }, [users])

  const userInfo = users.map((userObj) => {
    return <User key={userObj.id} name={userObj.name} location={userObj.location} email={userObj.email}/>
  })

  function handleSubmit(e) {
    e.preventDefault()
    const userObj = {
      username: username,
      name: uname,
      email: email,
      location: location
    }
    fetch('http://localhost:3000/users',{
      "method":"POST",
      "headers":{
        "Content-Type":"application/json"
      },
      "body":JSON.stringify(userObj)
    })
    .then((r)=>(r.json()))
    .then((data)=>{
      console.log(data)
    })
  }

  return (
    <div className={styles.Users}>

      <ul>
        {isAdmin ? <li>{name} {age}</li> : <li>current user is not Admin</li>}

      </ul>
      {userInfo }

      {/* onClick onSubmit onChange */}
      <form onSubmit={handleSubmit}>
        <input placeholder='username' id="username" onChange={(e) => setUsername(e.target.value)} />
        <input placeholder='uname' id="uname" type='string' onChange={(e) => setUname(e.target.value)} />
        <input placeholder='location' id="location" type='string' onChange={(e) => setLocation(e.target.value)} />
        <input placeholder='email' id="email" type='email' onChange={(e) => setEmail(e.target.value)} />

        <button type="submit" >Submit</button>
      </form>

    </div>
  )
};


export default Users;