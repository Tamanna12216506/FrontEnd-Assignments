import React,{useState} from 'react'

const NormalData = () => {
    const [state, setState] = useState(0);  //array destructuring
  console.log(state);
  
  let increment = () => {
    setState(state + 1);

  }

  let multiple = () =>{
    setState(state *2);
  }

  let decrement = ()=>{
      setState(state>0 ? state - 1 : 0);
  }
  
  return (
    <div>
        <h1>Normal way of passing data</h1>
      <h3>{state}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={multiple}>Multiple</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default NormalData
