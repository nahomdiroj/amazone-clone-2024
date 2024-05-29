import React, { useContext,useState } from 'react'
import Layout from '../../components/Layout/Layout'
import classes from './payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/product/ProductCard'
import { useStripe,useElements,CardElement } from '@stripe/react-stripe-js'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'


function Payment() {
  const[{user,basket}]=useContext(DataContext)

  const totalItem=basket?.reduce((amount,item)=>{
      return item.amount+ amount
  },0)

  const total =basket?.reduce((amount,item)=>{
    return item.price* item.amount + amount
   },0)


  const stripe =useStripe()
  const element=useElements()
  const [cardError,setCardError] = useState(null)

  const handleChange=(e)=>{
      e?.error?.message? setCardError( e?.error?.message):setCardError("")
  }

  return (
    <Layout>
      <div className={classes.payment_header}>checkout({totalItem})items</div>

      <section className={classes.payment}>
        <div className={classes.flex}>
            <h3>DElivery Address</h3>
            <div>
              <div>{user?.email}</div>
              <div>123 react</div>
              <div>chicago</div>
           </div>
        </div>
       
        <hr />
        <div className={classes.flex}>
            <h3>Review items and delivery</h3>
        </div>
        <div>
          {
            basket?.map((item)=><ProductCard product={item} flex={true}
        
            />)
          }
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {cardError&&<small  style={{color:"red"}}>{cardError}</small>}
                <CardElement onChange={handleChange}/>

                <div className={classes.payment_price}>
                  <div>
                    <span style={{display:"flex"}}>
                       <p> Total Order |</p> <CurrencyFormat amount={total}/>
                    </span>
                  </div>
                  <button>
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Payment