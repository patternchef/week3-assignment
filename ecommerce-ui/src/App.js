import airbnbs from './airbnbs.json'
import Hotel from './components/Hotel';

function App() {
  return (
    <div className="container">
      <h1>Rental Properties</h1>
      <hr/>

      <div className="available">
        <h1>Available</h1>
        {airbnbs.map((a, index) => {
          return <Hotel key={index} hotel={a} />
        })}

      </div>
    </div>
  );
}

export default App;
