import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Payment from './pages/Payment/Payment'
import SignIn from './pages/Auth/Signup'
import Orders from './pages/Orders/Orders'
import Orders from './pages/Orders/Orders'
import Landing from './pages/Landing/Landing'
function Router() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/auth" element={<SignIn/>}/>
          <Route path="/payments" element={<Payment/>}/>
          <Route path="/oredrs" element={<Orders/>}/>
          <Route path="/cart" element={<Cart/>}/>
       </Routes>
    </Router>
  )
}

export default Router