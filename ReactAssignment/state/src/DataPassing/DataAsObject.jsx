import React,{useState} from 'react'

const DataAsObject = () => {
  let [user,setUser]=useState({
    name:'Tamanna',
    marks:80
  })
  let increaseMarks = ()=>{
    setUser({...user,marks:user.marks+5});
  }
  return (
    <div>
        <h1>Object of User</h1>
      <h3>{user.name} {user.marks}</h3>
      <button onClick={increaseMarks}>Increase Marks</button>
    </div>
  )
}

export default DataAsObject
