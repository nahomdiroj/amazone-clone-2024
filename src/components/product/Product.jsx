import React, { useState ,useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loader from '../Loader/Loader'
function Product() {

   const [products, setProducts] = useState()
   const [isLaoding,setisLoading]=useState(true)

   useEffect(() => {

   axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
         setProducts(res.data)
         setisLoading(false)
         console.log(res.data[3])
       }).catch((err)=>{
        console.log(err)
        setisLoading(true)
       })
    
   }, [])
   
   
  return (
      <>
          {
            isLaoding?(<Loader/>):(  <section className={classes.products_container}>
              {
        
               products?.map((singleProduct)=>{
                
                 return   <ProductCard product={singleProduct} key={singleProduct.id}/>
                  })
       
                   
              }
           </section>)
          }
      </>
  )
}

export default Product