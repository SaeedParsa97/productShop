import Navbar from './components/Navbar/Navbar';
import ProductsSection from './components/ProductsSection/ProductsSection';
import './App.css';
import products from "./data/Products"
import Toast from './components/Toast/Toast';
import { useState } from 'react';

function App() {
 
  const [allProducts, setAllProducts] = useState(products);
  

  return (
    <>
    <Navbar />
    <main className='pb-5'>
      <div className='container'>
        <h1 className='text.center main-title'>All Products</h1>
        {allProducts.map((product)=>(<ProductsSection {...product} />))}
        
      </div>
    </main>
    <Toast />
    </>
    
  )
}

export default App
