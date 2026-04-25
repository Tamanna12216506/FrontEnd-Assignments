import React,{useState} from 'react'

const DataAsArray = () => {
  let userArr = ['Tamanna','Sakshi','Shivani'];
    const[user,setUser]=useState(userArr);
    console.log(user);
  
    let newUser= ()=>{
      setUser([...user,'Tanu']);
    }
    
    return (
      <div>
        <h1>Array of User</h1>
        <ul>
          {
            user.map((name,idx)=>(
                <li key={idx}>{name}</li>
            ))
          }
        </ul>
        <button onClick={newUser}>Add User</button>
      </div>
    )
}

export default DataAsArray
