import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/product/ProductCard'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from './cart.module.css'
import{Type} from '../../Utility/action.type'
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";




function Cart() {
  const [{basket, user},dispatch]=useContext(DataContext)
  const total =basket?.reduce((amount,item)=>{
   return item.price* item.amount + amount
  },0)
  const increment =(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
  const decrement =(id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }



  return (
    <Layout>
      
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
            <h2>Your shopping basket</h2>
            <hr />
            {
              basket?.lenght==0?(<p>Opps ! No Items in your cart</p>):(basket?.map((item,i)=>{
               return  <section className={classes.cart_product}>
                  <ProductCard
               key={i}
               product={item}
               renderDesc={true}
               flex={true}
               renderAdd={false}
               
               />

               <div className={classes.btn_container}> 
                <button className={classes.btn} onClick={()=>increment(item) }> <IoIosArrowUp size={20}/> </button>
                <span>{item.amount}</span>
                <button className={classes.btn} onClick={()=>decrement(item.id) }><IoIosArrowDown size={20} /></button>
               </div>
               </section> 
              }))
            }
        </div>

      {  basket?.lenght!==0&&( 
      <div className={classes.subtotal}>
            <div >
                <p>subtotal ({basket?.lenght}items)</p>
                <CurrencyFormat
                amount={total}
                
                />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="payments">continue to checkout</Link>
          </div>)
        
          
        
      }

       
      </section>

    </Layout>
  )
}

export default Cart