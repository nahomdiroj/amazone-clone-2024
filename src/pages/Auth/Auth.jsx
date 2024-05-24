import React, { useState,useContext } from 'react'
import{auth} from '../../Utility/firebase'
import classes from './auth.module.css'
import { BsListNested } from 'react-icons/bs'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from '../../components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'
function Auth() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[error,setError]=useState("")

  const [{user},dispatch]= useContext(DataContext)
  console.log(user)

  const authHandler= async(e)=>{
      e.preventDefault()
      console.log(e.target.name)
      if(e.target.name=="signin"){
         signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
     
          dispatch({
            type:Type.SET_USER,
            user:userInfo.user
          })
         }).catch((err)=>{
          console.log(err)
         })   
      }else{
            createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
       
             }).catch((err)=>{
              console.log(err)
             })  
      }
  }


  return (
    <section className={classes.login}>

        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_PNG6.png" alt="" srcset="" />
       
        <div className={classes.login_container}>
          <h1>Sign In</h1>

          <form action=''> 
              <div>
                <label htmlFor="email">E-mail</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id='email' />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} id='password' />
              </div>
              <button type='submit' onClick={authHandler} 
              
              name='signin'
              className={classes.logi_singInButton}>Sign In</button>
          </form>

          <p>
            By singing-in you agree to the AMZONE FAKE CLONE conditions of use & Sale. please see our privacy Notice, our Cookies and Interest-Based Ads Notice.
          </p>

          <button className={classes.login_registerButton}  name='singup' onClick={authHandler}> Create Your amazone Account</button>
         
        </div>
    
    
   



    </section>
  )
}

export default Auth