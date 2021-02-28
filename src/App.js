import { useEffect, useState } from 'react';
import Cart from './components/Country/Cart/Cart';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/all`;
    fetch(url)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])    //[] how many times repeated

  const [cart, setCart] = useState([]);

  const handleCountryAdd = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 >Country Loaded: {countries.length}</h2>
      <h2 >Country Added: {cart.length}</h2>
      <Cart cart={cart}></Cart>

      {
        countries.map(country => <Country country={country} key={country.name} handleCountryAdd={handleCountryAdd}></Country>)
      }
    </div>
  );
}

export default App;
