import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import classes from './carousel.module.css'
import {img} from './images/data.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CarouselEffect() {
  return (
    <div>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                showThumbs={false }
            >

              {
                    img.map((imageItemsLink)=>{
                      return <img src={imageItemsLink}/>
                    })
              }
            </Carousel>

            <div className={classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffect