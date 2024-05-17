import React from 'react'
import CarouselEffect from '../../components/carousel/CarouselEffect'
import Catagory from '../../components/catagory/Catagory'
import Product from '../../components/product/Product'
import Layout from '../../components/Layout/Layout'
function Landing() {
  return (
    <Layout>
        
            <CarouselEffect/>
            <Catagory/>
            <Product/>

    </Layout>
  )
}

export default Landing