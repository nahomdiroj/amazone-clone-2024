import React, { useContext } from 'react'
import { CiLocationOn } from "react-icons/ci";
import classes from './Header.module.css'
import { BsSearch } from 'react-icons/bs';
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import {auth} from "../../Utility/firebase"

function Header() {
    const [{user,basket},dispatch] =useContext(DataContext)
    const totalItem=basket?.reduce((amount,item)=>{
        return item.amount+ amount
    },0)
    
  return (
    <section className={classes.fixed}>
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
                    <BsSearch size={39}/>
                  
                </div>
               <div className={classes.order_container}>
                    <Link to="" className={classes.language}>
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXrh8P3GhPRNj1qZQFjd4rLZVFQFf3_cYICNn8VAUyQ&s" alt="" />

                             <select name="" id="">
                                <option value="">EN</option>
                             </select>
                    </Link>
                    <Link to={!user&&"/auth"}>
                        <div>

                            {

                               user?(
                                 <>
                                 <p>Hello {user?.email?.split("@")[0]}</p>

                                 <span onClick={()=>{auth.signOut()}}>sign Out</span>
                                 </> 
                            ):(
                                <>
                                <p> Hello Sign In</p>
                                <span>Account & Lists</span>
                                </>
                                  )
                            }
                       
                        </div>
                      
                        
                    </Link>
                    <Link to="/orders">
                        <p>returns</p>
                        <span>& Orders</span>
                    </Link>
                    <Link to="/cart" className={classes.cart}>
                        <BiCart size={35}/>
                        <span>{totalItem}</span>
                    </Link>
               </div>
               
      
            
               

           

               </div>  
        </section>
        
        <LowerHeader/>
    </section>
  )
}

export default Header