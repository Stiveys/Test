import React from 'react';
import "../src/Users.module.css";
import "../src/User/User";


function Users ({name, age, isAdmin}) {
  const users = [
    {id:1, name:"John Doe", location:"Nairobi"},
    {id:2, name:"Jane Doe", location:"Dubai"},
    {id:3, name:"Steve Jobs", location:"Somali"}
  ]

  const userInfo = users.map((userObj)=> {
    return <User key={userObj.id} name={userObj.name} location={userObj.location}/>
  })

  function handleOnChange(e){
    console.log(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log(e.target.value)
  }


  return (
  <div className={styles.Users}>

    <ul>
      {isAdmin ?  <li>{name} {age}</li> : <li>Current user is not Admin</li>}

    </ul>

    {userInfo}
    <form onSubmit={handleSubmit}>
    <input placeholder='username' id='username' />
    <input placeholder='name' id='name' type='string'/>
    <input placeholder='location' id='location' type='string'/>
    <input placeholder='email' id='email' type='email'/>
    <button type="submit">Submit</button>

    </form>

    <button onClick={()=>alert("button clicked")}>Click Me</button>
  </div>
  )

};



export default Users;