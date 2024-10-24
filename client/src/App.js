import './Component/css/StyleSheet.css'
import './App.css';
import Navbar from './Component/Navbar'
import Home from './Component/Home';
import Footer from './Component/Footer';
import { Route, Routes } from 'react-router-dom';
import Signup from './Component/Signup';
import Login from './Component/Login';
import BdayCake from './Component/BdayCake';
import Admin from './Component/Admin'
import PlaceOrder from './Component/PlaceOrder';
import AddtoCart from './Component/AddtoCart';
import WeddingCake from './Component/WeddingCake';
import DesignCake from './Component/DesignCake';
import About from './Component/About';
import Payment from './Component/Payment';

function App() {

  return (
    <div className="App">
     
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Bday' element={<BdayCake />} />
          <Route path='/Users' element={<Signup/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/about' element={<About/>} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/Bday' element={<BdayCake />} />
          <Route path='/WeddingCake' element={<WeddingCake/>}/>
          <Route path='/DesignCake' element={<DesignCake/>}/>
          <Route path='/AddtoCart' element={<AddtoCart/>}/>
          <Route path='/Placeorder' element={<PlaceOrder />} />
          <Route path='/payment' element={<Payment/>} />
        </Routes>
      <Footer />

    </div>
  );
}

export default App;
