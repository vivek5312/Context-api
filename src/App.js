import "./App.css";
import Item from "./Components/Item";
import Cart from "./Components/Cart";
function App() {
  
  return (
    <div className="App">
   <Item name='Macbook Pro' price={10000}/>
   <Item name='Mobile' price={5000}/>
   <Item name='Pendrive' price={2000}/>
   <Cart/>
    </div>
  );
}

export default App;
