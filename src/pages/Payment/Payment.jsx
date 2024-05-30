import React, { useContext,useState } from 'react'
import Layout from '../../components/Layout/Layout'
import classes from './payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/product/ProductCard'
import { useStripe,useElements,CardElement } from '@stripe/react-stripe-js'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { axiosInstance } from '../../Api/axios'
import { ClipLoader } from 'react-spinners'
import { db } from '../../Utility/firebase'
import { useNavigate } from 'react-router-dom'

function Payment() {
  const[{user,basket}]=useContext(DataContext)

  const totalItem=basket?.reduce((amount,item)=>{
      return item.amount+ amount
  },0)

  const total =basket?.reduce((amount,item)=>{
    return item.price* item.amount + amount
   },0)


  const stripe =useStripe()
  const elements=useElements()
  const [cardError,setCardError] = useState(null)
  const [processing,setProcessing]=useState(false)
   const navigate=useNavigate()

  const handleChange=(e)=>{
      e?.error?.message? setCardError( e?.error?.message):setCardError("")
  }


  const handlePayment= async(e)=>{
    e.preventDefault()
    try{
      setProcessing(true)
          const response = await axiosInstance({
            method:"POST",
            url:`/payment/create?total=${total*100}`
          })
          console.log(response.data)
          const clientSecret = response.data?.clientSecret

          const {paymentIntent}= await stripe.confirmCardPayment(
              clientSecret,{payment_method:{
                card:elements.getElement(CardElement)
              }}
          )
       

          await db.collection("users").doc(user.uid).collection("orders").doc(paymentIntent.id).set({
            amount:paymentIntent.amount,
            created:paymentIntent.created
          })


        setProcessing(false)
          navigate("/orders",{state:{msg:"you have placed new order"}})

    }catch(error){
        console.log(error)
        setProcessing(false)
    }
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
              <form onSubmit={handlePayment}>
                {cardError&&<small  style={{color:"red"}}>{cardError}</small>}
                <CardElement onChange={handleChange}/>

                <div className={classes.payment_price}>
                  <div>
                    <span style={{display:"flex"}}>
                       <p> Total Order |</p> <CurrencyFormat amount={total}/>
                    </span>
                  </div>
                  <button type='submit'>
                    {
                      processing?(
                        <div className={classes.loading}>
                          <ClipLoader color='grey' size={12}/>
                          <p>Please wait ...</p>
                          </div>
                        
                      ):"Pay Now"
                    }
                    
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