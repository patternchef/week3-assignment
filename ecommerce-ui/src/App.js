import airbnbs from './airbnbs.json';
import Hotel from './components/Hotel';
import Cart from './components/Cart';
import React, { useState } from 'react';


function App() {
  const [list, setList] = useState([]);
  const onClick = (info) => {
    setList([...list, info]);
  }
  const removeItem = (index) => {
    let newList = list.splice(index, 1);
    setList(list.splice(newList));
  }
  return (
    <div className="container">
      <h1>Rental Properties</h1>
      <hr/>
      <div className="available">
        <h1>Available</h1>
        {airbnbs.map((a, index) => {
          return <Hotel key={index} hotel={a} onClick={onClick} />
        })}
      </div>
      <div className="cart">
        <h1>Cart</h1>
        <Cart list={list} removeItem={removeItem}/>
      </div>
    </div>
  );
}

export default App;
 