import './App.css';
import Cart from './components/Cart/Cart';
import Game from './components/Game';
import MyCounter from './components/MyCounter';
import ProductApp from './components/ProductApp/ProductApp';

function App() {

  const counters = [
    { id: 1, initial: 6, min: -5, max: 10 },
    { id: 2, initial: 5 },
    { id: 3 }
  ];

  return (
    <>
      <MyCounter  {...counters[0]}  />
      <MyCounter  {...counters[1]}  />
      <MyCounter  {...counters[2]}  />
      <ProductApp/>
      <Cart/>
      <Game/>
      
      

    </>
  );
}

export default App;
