import airbnbs from './airbnbs.json';
import Hotel from './components/Hotel';
import Cart from './components/Cart';
import React, { useState } from 'react';


function App() {

  const [list, setList] = useState([]);

  const onClick = (info) => {
    setList( arr => [...arr, info])
    console.log(list);
  }

  return (
    <div className="container">
      <h1>Rental Properties</h1>
      <hr/>

      <div className="available">
        <h1>Available</h1>

        {airbnbs.map((a, index) => {
          return <Hotel key={ index } hotel={ a } onClick={ onClick } />
        })}
      </div>

      <Cart list={list} />

    </div>
  );
}

export default App;
 