import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom';
import {productUrl} from '../../Api/endPoints'
import axios from 'axios';
import ProductCard from '../../components/product/ProductCard'


function ProductDetail() {

  
  const {productId}=useParams()
  const [product, setproduct] =useState({})

  console.log(productId)
  useEffect(() => {

  axios.get(`${productUrl}/products/${productId}`)
  .then((res)=>{
    setproduct(res.data)
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
   
  }, [])
  

  return (
    <Layout><ProductCard
    product={product}
    
    /></Layout>
  )
}

export default ProductDetail