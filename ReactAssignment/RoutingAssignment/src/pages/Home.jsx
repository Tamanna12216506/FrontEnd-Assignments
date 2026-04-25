import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  let[id,setId] = useState(1);
  return (
    <div>Home
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link><hr />
      <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/> <br />
      <Link to={`/user/${id}`}>User</Link>

    </div>
  )
}

export default Home