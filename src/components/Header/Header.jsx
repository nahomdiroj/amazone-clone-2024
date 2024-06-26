import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import classes from './Header.module.css'
import { BsSearch } from 'react-icons/bs';
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <section>
            <div className={classes.header_container}>
                {/* logo */}
                <div className={classes.logo_container}>
                    <Link to="/">'
                         <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" srcset="" />
                     </Link>
                </div>
                
                {/* delivery */}
                <div className={classes.delivery}>
                    <span>
                        <CiLocationOn />
                    
                    </span>
                    <div>
                        <p>Delivered to</p>
                    
                        <span>Ethipia</span>
                    </div>
                </div>
        

                {/* Search Section */}
                <div className={classes.search}>
                    {/* search */}
                    <select  name="" id="">
                        <option value="">All</option>
                    </select>
                    <input type="text" placeholder='Search Product'  />
                    <BsSearch size={25}/>
                  
                </div>
               <div className={classes.order_container}>
                    <Link to="" className={classes.language}>
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXrh8P3GhPRNj1qZQFjd4rLZVFQFf3_cYICNn8VAUyQ&s" alt="" />

                             <select name="" id="">
                                <option value="">EN</option>
                             </select>
                    </Link>
                    <Link to="">
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                    </Link>
                    <Link to="/orders">
                        <p>returns</p>
                        <span>& Orders</span>
                    </Link>
                    <Link to="" className={classes.cart}>
                        <BiCart size={35}/>
                        <span>0</span>
                    </Link>
               </div>
               
      
            
               

           

               </div>  
        </section>
        
        <LowerHeader/>
    </>
  )
}

export default Header