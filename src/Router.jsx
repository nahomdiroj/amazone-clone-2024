import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Payment from './pages/Payment/Payment'
import SignIn from './pages/Auth/Signup'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Landing from './pages/Landing/Landing'
function Routing() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/auth" element={<SignIn/>}/>
          <Route path="/payments" element={<Payment/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/cart" element={<Cart/>}/>
       </Routes>
    </Router>
  )
}

export default Routing