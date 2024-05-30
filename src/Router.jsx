import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Landing from './pages/Landing/Landing'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Auth from './pages/Auth/Auth'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute'
const stripePromise = loadStripe('pk_test_51PKwf4Esp7mjXK4o9qOHEhRtgtjHSz47cchpUF6bMaj8ldp5TomlcefYsqcKY3SeoNBfIWpGj1sVmYAAzlPUppWh00gNvh7Yqy');

function Routing() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/payment"
          element={
           <ProtectedRoute msg={"you must log in to pay"} redirect={"/payment"}>

           <Elements stripe={stripePromise}>
              <Payment/>
            </Elements>
            
           </ProtectedRoute>
          }
          
           />
    
          <Route path="/orders" 
          
          element={
            <ProtectedRoute msg={"you must log in to order"} redirect={"/orders"}>
 
            <Elements stripe={stripePromise}>
               <Orders/>
             </Elements>
             
            </ProtectedRoute>
           }
          />
          <Route path='/category/:categoryName' element={<Results/>}/>
          <Route path='/products/:productId' element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
       </Routes>
    </Router>
  )
}

export default Routing