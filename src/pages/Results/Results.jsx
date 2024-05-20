import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {productUrl} from '../../Api/endPoints'
import classes from './Results.module.css'
import ProductCard from '../../components/product/ProductCard';

function Results() {
  const [results,setResults]= useState([])
  const {catagoryName}= useParams();
  useEffect(() => {
    axios.get(`${productUrl}/products/catagory/${catagoryName}`)
    .then((res)=>{
     setResults(res.data)
    }).catch((err)=>{
        console.log(err)
    })
  }, [])
  
 

  return (
    <Layout>
      
      <section>
        <h1 style={{padding:"30px"}}>Result</h1>
        <p style={{padding:"30px"}}>Catagory/ {catagoryName}</p>

        <hr/>

        <div className={classes.products_container}>
          {results?.map((product)=>{
            <ProductCard key={product.id}
              product={product}
            />
          })}

        </div>

      </section>

    </Layout>
    
  )
}

export default Results