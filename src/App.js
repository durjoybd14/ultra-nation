import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import TotalPopulation from "./components/Country/TotalPopulation/TotalPopulation";


function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(data => setCountries(data))
    // .catch(alert('Error'));
  }, []) //[] how many times repeat

  const [cart, setCart] = useState([])
  const handleAdd = (country) => {
    const newCart = [...cart, country]
    setCart(newCart)
  }


  return (

    <div style={{ textAlign: 'center' }}>
      <h1>Total Country: {cart.length} </h1>
      <TotalPopulation cart={cart}></TotalPopulation>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)'
      }}>
        {
          countries.map(country => <Country country={country} handleAdd={handleAdd} key={country.name}></Country>)
        }

      </div>
    </div>
  );
}

export default App;
