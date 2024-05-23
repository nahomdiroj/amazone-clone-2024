import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom';
import {productUrl} from '../../Api/endPoints'
import axios from 'axios';
import ProductCard from '../../components/product/ProductCard'
import Loader from '../../components/Loader/Loader';



function ProductDetail() {

  
  const {productId}=useParams()
  const [product, setproduct] =useState({})

  const [isLaoding,setisLoading]=useState(true)

 
  useEffect(() => {
    
  axios.get(`${productUrl}/products/${productId}`)
  .then((res)=>{
    setproduct(res.data)
    setisLoading(false)
  }).catch((err)=>{
    console.log(err)
    setisLoading(true)
  })
   
  }, [])
  

  return (
    <Layout>
      
      {isLaoding?(<Loader/>):(<ProductCard
    product={product}
    flex={true}
    renderDesc={true}
    renderAdd={true}
    
    />)}

    
    </Layout>
  )
}

export default ProductDetail