import React, {useState} from 'react';
import styles from './Users.module.css';
import User from '../User/User';


function Users({name,age, isAdmin}) {
    const [name,setName] = useState
const Users=[
{id:1,name:"John Doe", location:"Nairobi"},
{id:1,name:"Jane Doe", location:"Dubai"},
{id:1,name:"SteveJobs", location:"Somali"},
]

  return (

  <div className={styles.Users}>

    <ul>
      {isAdmin ? <li>{name} {age}</li> : <li>current user is not Admin</li>}
    </ul>
    <User />

    </div>

)
};


export default Users;