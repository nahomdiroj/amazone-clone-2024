import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {productUrl} from '../../Api/endPoints'
import classes from './Results.module.css'
import ProductCard from '../../components/product/ProductCard';
import Loader from '../../components/Loader/Loader'

function Results() {
  const [results,setResults]= useState([])
  const {categoryName}= useParams();
  console.log(categoryName.toLowerCase)
  const [isLaoding,setisLoading]=useState(true)
  
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName.toLocaleLowerCase()}`)
    .then((res)=>{
     setResults(res.data)
     setisLoading(false)
   
   
    }).catch((err)=>{
        console.log(err)
        setisLoading(true)
    })
  }, [])
  
 //https://fakestoreapi.com/products/category/jewelery

   

  return (
    <Layout>
      
      <section>
        <h1 style={{padding:"30px"}}>Result</h1>
        <p style={{padding:"30px"}}>Category/ {categoryName}</p>

        <hr/>

          {isLaoding?(<Loader/>):(<div className={classes.products_container}>
          {results?.map((product)=>{
            
            
           return <ProductCard key={product.id}
              product={product}
              renderAdd={true}
            />

         
            
          })}

        </div>)}

      </section>

    </Layout>
    
  )
}

export default Results