import About  from './components/about/About';
import Store from './components/store/Store'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import StoreCart from './components/storeCart/StoreCart';
import { Route ,  BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import StoreCartProvider from './context/StoreCartContext';


function App() {


  return (
<>



<div className='app-first-container'>
        <div className='app-container'>
    <Router>
    
    <StoreCartProvider>
    <Navbar/>
    <Routes>
    
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<StoreCart/>} />
        
    </Routes>
    </StoreCartProvider>
    </Router>
    
        </div>
        </div>



</>

  );
}

export default App;

