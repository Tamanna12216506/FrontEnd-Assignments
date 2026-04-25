import React, { useState } from 'react'

const HandleChange = () => {
    let [data,setData] = useState({
        userName:'',
        password:'',
        gender:' ',
        skills:[],
        location:'',
        message:' '
    })
    let handleChange = (e) => {
        console.log(e.target.value);
        let {name,value} = e.target;    
        setData({...data,[name]:value}) 
    }

    let handleCheck = (e) => {
        let{value,checked}=e.target;
        setData({...data,skills:checked ? [...data.skills,value]: data.skills.filter((e) => e !== value)})
        // if checked is true then add the value to skills array otherwise remove the value from skills array using filter method
        
    }

  return (
    <div>
      <form action="">
        <input type="text" name="userName" onChange={handleChange} value={data.userName} placeholder='enter your name'/><br /><br />
        <input type="password" name="password" onChange={handleChange} value={data.password} placeholder='enter your password'/><br /><br />

        {/* Radio Button */}
        <input type='radio' name='gender' id='' value='male' onChange={handleChange}/>
        <label htmlFor="male">Male</label>
        <input type='radio' name='gender' id='' value='female' onChange={handleChange}/>
        <label htmlFor="female">Female</label> <br /><br />

        {/* Checkbox */}
        HTML<input type='checkbox' name='skills' value='HTML' onChange={handleCheck} /> 
        CSS<input type='checkbox' name='skills' value='CSS' onChange={handleCheck}/>       
        JS<input type='checkbox' name='skills' value='JS' onChange={handleCheck}/><br /><br />

      
        {/* Dropdown */}
        <select name="location" onChange={handleChange} value={data.location}>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
        </select>  <br /><br />

        {/* Textarea */}

        </form>
        <hr></hr>
        <h2>userName: {data.userName}</h2>
        <h2>password: {data.password}</h2>
        <h2>gender: {data.gender}</h2>
        <h2>Skills: {data.skills.join(' , ')}</h2>
        <h2>Location: {data.location}</h2>
        <p>{data.message}</p>
    

    </div>
  )
}

export default HandleChange
