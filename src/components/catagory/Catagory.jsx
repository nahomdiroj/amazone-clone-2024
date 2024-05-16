import React from 'react'
import {catagoryInfos} from './categoryInfos'
import CatagoryCard from './CatagoryCard'
import classes from './catagory.module.css'

function Catagory() {
  return (
    <section className={classes.catagory_container}>
     

        {
          catagoryInfos.map((info)=>{
                
          return  <CatagoryCard data={info}/>

          })
        }

    </section>
  )
}

export default Catagory