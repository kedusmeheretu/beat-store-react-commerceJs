import React, {useState, useEffect} from 'react'
// import Products from './components/Products/Products'
// import Navbar from './components/Navbar/Navbar'
import { commerce } from './components/lib/commerce'
import { Products, Navbar, Cart } from './components'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart ] = useState([])

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();

    setProducts(data)
}

const fetchCart = async () => { 
  setCart(await commerce.cart.retrieve())
}

const handleAddToCart = async (productId) => {
  const {cart} = await commerce.cart.add(productId)

  setCart(cart)
}

const handleUpdateCartQty = async (productId) => {
  const {cart} = await commerce.cart.update(productId);

  setCart(cart)
}

const handleRemoveFromCart = async (productId) => {
  const {cart} = await commerce.cart.remove(productId)

  setCart(cart)
}

const handleEmptyCart = async () => {
  const {cart} = await commerce.cart.empty()

  setCart(cart)
}

useEffect(() => {
  fetchProducts();
  fetchCart();
}, [])

console.log(cart.total_items)



// console.log(products)

  return (
    <Router>
        <div>
        <Navbar totalItems={cart.total_items}/>
        <Routes>
          <Route exact path='/' element={<Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty/>}/>
          <Route exact path='/cart' element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}  />}/>
        </Routes>
        </div>
    </Router>
  )
}

export default App