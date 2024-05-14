import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {img} from './images/data.js'
function Carousel() {
  return (
    <div>
            <Carousel
                autoplay={true}
                infinitloop={true}
                showIndicators={false}
                showThumbs={true}
            >


            </Carousel>
    </div>
  )
}

export default Carousel