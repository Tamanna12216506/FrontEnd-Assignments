import React,{useState} from 'react'

const DataAsNull = () => {
  let [user,setUser]=useState(null);  //why let over const? because we are changing the value of user by setUser function
    console.log(user);  //  it will give null in console because we have initialized user with null and when we click on button then it will change the value of user to 'User Loading...' and then it will give 'User Loading...' in console
  
    return (
      <div>
        <h1>Null value of User</h1>

        {/* <h1>{user ? user : 'No user'}</h1>   */}
        {
          user ? <h3>{user}</h3> : <h3>No user</h3>
        }
        <button onClick={()=>setUser('User Loading...')}>Add User</button>
      </div>
    )
}

export default DataAsNull
