import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import CategoryeProduct from './components/CategoryeProduct/CategoryeProduct'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Pagenotfound from './components/Pagenotfound/Pagenotfound'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='container'>
        <Routes>
          <Route path='products' element={<Products/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='category/:name' element={<CategoryeProduct/>}></Route>
          <Route path='product/:id' element={<ProductDetails/>}></Route>
          <Route path='*' element={<Pagenotfound/>}></Route>
        </Routes>
    
      </div>
    </div>
  );
}

export default App;
