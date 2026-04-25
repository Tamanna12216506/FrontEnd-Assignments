import React, { useState } from 'react'

const DataAsCondition = () => {
    let [role,setRole]=useState('guest');

  return (
    <div>
      <button onClick={() => setRole('guest')}>Guest</button>
      <button onClick={() => setRole('user')}>User Login</button>
      <button onClick={() => setRole('admin')}>Admin Login</button>
      {
        //Short circuit  = use of logical operator
        role ==='guest' && <h1>Welcome Guest</h1>    
        //if left side is true then only right side will execute
      }
      {
        role ==='user' && <h1>Your are User</h1>
      }
      {
        role ==='admin' && <h1>Welcome to Admin Page</h1>
      }
    </div>
  )
}

export default DataAsCondition
