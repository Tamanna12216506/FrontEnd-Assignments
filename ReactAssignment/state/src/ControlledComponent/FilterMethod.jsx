import React, { useState } from 'react'

const FilterMethod = () => {
    let [category,setCategory] = useState('');
    let products = [
        {name:'Laptop',categories:'Electronics',price:50000},
        {name:'Shirt',categories:'Clothing',price:1000},
        {name:'Mobile',categories:'Electronics',price:20000},
        {name:'Jeans',categories:'Clothing',price:1500},
        {name:'Headphones',categories:'Electronics',price:2000},
        {name:'Jacket',categories:'Clothing',price:3000},
    ]
    
    let handleChange = (e)=>{
            setCategory(e.target.value);   
    }
    
    let filterVal = () => (
        (category === '' ? products : products.filter(e => e.categories === category))
         .map((item, idx) => (
            <ul key={idx}>
             <li>{item.name} - ₹{item.price}</li>
             </ul>
    ))
);

    
  return (
    <div>
      <h1>Product</h1>

       <input type='text' placeholder='enter category' value={category} onChange={handleChange} />

      {
        filterVal()
      }

    </div>
  )
}

export default FilterMethod
