import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Flower from './pages/Flower/Flower';
import Login from './components/Login/Login';
import Fruit from './pages/Fruit/Fruit';
import Vegetable from './pages/Vegetable/Vegetable';
import Medicine from './pages/Medicine/Medicine';
import FilterFlower from './pages/Flower/FilterFlower';
import FilterFruit from './pages/Fruit/FIlterFruit';
import FilterMedicine from './pages/Medicine/FilterMedicine';
import FilterVege from './pages/Vegetable/FilterVege';
import About from './pages/About/About';
import Buynow from './components/Buynow/Buynow';
import Card from './components/Card/Card';
import Cart from './pages/Cart/cart';
import {CartProvider} from 'react-use-cart';
function App() {
  return (
 

   
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/flower" element={<Flower />} />
        <Route path="/fruit" element={<Fruit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vegetable" element={<Vegetable />}/>
        <Route path="/FilterFlower/:type" element={<FilterFlower />} />
        <Route path="/FilterFruit/:type" element={<FilterFruit />} />
        <Route path="/FilterVege/:type" element={<FilterVege />} />
        <Route path="/FilterMedicine/:type" element={<FilterMedicine />} />
        <Route path="/Buynow" element={<Buynow/>} />
        <Route path="/Card" element={<Card/>} />
        <Route path="/Cart" element={<Cart/>} />
       

        
       
        
      </Routes>
    </Router>
   
  );
}

export default App;
