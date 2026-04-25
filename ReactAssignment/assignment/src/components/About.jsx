import axios from 'axios';
import React, { useEffect, useState } from 'react'

const About = () => {
    let[user,setUser] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUser(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);

  return (
    <div style={{ padding: "20px", backgroundColor: "#fae7bf" }}>
      <h3 style={{textAlign:'center',color:'Green'}}>Our Customers</h3>
      <ul >
        {
            user.map((user)=>(
                <li key = {user.id}>{user.name} - {user.email}</li>
            ))
        }
      </ul>
    </div>
  )
}


export default About
