import React, { useState,useContext } from 'react'
import{auth} from '../../Utility/firebase'
import classes from './auth.module.css'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from '../../components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'
import { ClipLoader } from 'react-spinners'
import { Link, useNavigate } from 'react-router-dom'
function Auth() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[error,setError]=useState("")
  const[loading,setLoading]=useState({signIn:false,signUp:false})
 const navigate = useNavigate();
  const [{user},dispatch]= useContext(DataContext)


  const authHandler= async(e)=>{
      e.preventDefault()
     
      if(e.target.name=="signin"){
        setLoading({...loading,signIn:true})
         signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
     
          dispatch({
            type:Type.SET_USER,
            user:userInfo.user
          })
          setLoading({...loading,signIn:false})
          navigate("/")
         }).catch((err)=>{
          setError(err.message)
          setLoading({...loading,signIn:false})
         })   
      }else{
        
            createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
              setLoading({...loading,signUp:true})
                dispatch({
                  type:Type.SET_USER,
                  user:userInfo.user
                })
                setLoading({...loading,signUp:false})
                navigate("/")
             }).catch((err)=>{
              setError(err.message)
              setLoading({...loading,signUp:false})
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
              className={classes.logi_singInButton}>
                
                {
                  loading.signIn?
                  <ClipLoader   color="#36d7b7" size={15}/>:("Sign In")
                }
                
                </button>
          </form>

          <p>
            By singing-in you agree to the AMZONE FAKE CLONE conditions of use & Sale. please see our privacy Notice, our Cookies and Interest-Based Ads Notice.
          </p>

          <button className={classes.login_registerButton}  name='singup' onClick={authHandler}>  {
                  loading.signUp?
                  <ClipLoader   color="#36d7b7" size={15}/>:("Create your Amazon Account")
                }</button>
         {error&& <small style={{paddingTop:"5px",color:"red"}}>{error}</small>}
        </div>
    
    
   



    </section>
  )
}

export default Auth