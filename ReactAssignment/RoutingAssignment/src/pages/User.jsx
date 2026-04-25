import React, { useEffect, useState } from 'react'

const User = () => {
  let {id} = useParams();
  let[data,setData] = useState(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(res=>setData(res))
  }, [id])

  if(!data){  
    return <h1>Loading...</h1>
  }

  return (
    <div>User
      {
          User && <p>{data.name} - {data.email}</p>  
      }
    </div>
  )
}

export default User