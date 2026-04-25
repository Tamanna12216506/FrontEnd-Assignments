import React,{useState} from "react";
const Content = () => {
  const [color, setColor] = useState('#bce5ef');
  let[state,setState] = useState({
            foodName:' ',
            description:'',
            payment:'',
            beverages:[],
            sauce:''
    });

    let handleCheck = (e)=>{
        let{name,value}=e.target;
        setState({...state,[name]:value});
    }
    let handleCheckBox = (e)=>{
        let {value,checked} = e.target;
        setState({...state,beverages:checked ?[...state.beverages,value]:[state.beverages.filter((e)=> e!== value)]});
    }

  return (
    <>
    <div style={{ backgroundColor: color, minHeight: "100vh", padding: "20px" }}>
      <h1>Content Component</h1>
      <button onClick={() => setColor('#FFF9C4')}>Happy😁</button>     
      <button onClick={() => setColor('#C8E6C9')}>Sad😢</button>       
      <button onClick={() => setColor('#FFCCBC')}>Angry😠</button>    
      <button onClick={() => setColor('#eebdf4')}>Surprised😲</button> 
<br /><br />
      <div className='container'>
      <form action="">
        Food Name: <input type='text' name = 'foodName' onChange={handleCheck} value={state.foodName} placeholder='enter food name' id='foodname'/>
        <br /><br />
        Descritpion: <textarea name='description' onChange={handleCheck} value={state.description} id='fooddesc' />
        <br /><br />

        Payment Method:
        <input type='radio' name='payment' value="Card" onChange={handleCheck} />Card
        <input type='radio' name='payment' value="Cash" onChange={handleCheck} />Cash   
        <br /><br />

        Beverages:
        <input type='checkbox'name='beverage' value="Coke"  onChange={handleCheckBox} />Coke
        <input type='checkbox'name='beverage' value="Pepsi" onChange={handleCheckBox} />Pepsi
        <input type='checkbox'name='beverage' value="Sprite" onChange={handleCheckBox} />Sprite
        <br /><br />

        Sauces:
        <select name='sauce'name='sauce' onChange={handleCheck} value={state.sauce} id='sauce'>
            <option value='Tomato'>Tomato</option>
            <option value='Mayo'>Mayo</option>
            <option value='Mustard'>Mustard</option>
        </select>
      </form>
      <hr></hr>
        <h2>Food Name: {state.foodName}</h2>
        <h2>Description: {state.description}</h2>
        <h2>Payment Method: {state.payment}</h2>
        <h2>Beverages: {state.beverages.join(' , ')}</h2>
        <h2>Sauce: {state.sauce}</h2>
    </div>
    </div>
  
    </>
  )
}

export default Content

    

    