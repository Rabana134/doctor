import React, { useEffect, useState } from 'react'
import './main.css'
import Navbar from './Navbar/Navbar';
import FadeIn from 'react-fade-in';
import img from './Image/img1.jpg'
import Footer from './Footer/Footer';
import { useNavigate } from 'react-router-dom';


function Home() {
  const history = useNavigate()
  return (
    <div>
    <Navbar/>
    <div style={{overflow:"hidden"}}>
      <div className='top'>
      <div style={{width:"50vw", marginTop:"3rem", display:"inline-block"}}>
      <FadeIn transitionDuration={3000}>
      <h1 className='welcome'>Welcome Onboard!!</h1>
          <p className='welcome_p'> We offer you an opportunity to converse and book appointments
           with doctors in our hospital, We help diagnose whatever medical issue you may be facing immediately!!! </p>
           <div style={{width:"fit-content", margin:"0px auto"}}>
           <button className='btn' onClick={()=>{history("/login")}}>Book A Doctor</button>
           <button className='btn_m' onClick={()=>{history("/login")}}>Book A Doctor</button>
           </div>
           
      </FadeIn>
      </div>
      <div style={{width:"40vw", marginTop:"3rem", display:"inline-block", 
      verticalAlign:"top",marginLeft:"2rem",overflow:"hidden"}}>
      <FadeIn transitionDuration={3000}>
      <div style={{width:"fit-content", margin:"0px auto"}}>
          <img src={img} style={{height:"65vh"}}></img>
      </div>
       
      </FadeIn>
      </div>
      </div>
      <h1 className='welcome' style={{color:"#282c34"}}>How we work in 3 steps</h1>
      <div>
      <div style={{overflow:"auto", width: "100vw", height:"14.5rem",whiteSpace:"nowrap",overflowY:"hidden"}} className="hwwscroll">
        <div className='hww'>
        <h1 className='welcome' style={{color:"#282c34"}}>1- Create Your Account</h1>
          <p className='welcome_p' style={{color:"#282c34"}}>
            Create an account with our service, so as to save your 
            medical history on our records.
          </p>
        </div>
        <div className='hww'>
        <h1 className='welcome' style={{color:"#282c34"}}>2- Converse With Doctors</h1>
          <p className='welcome_p' style={{color:"#282c34"}}>
            Consult our doctors on medical matters, with less than 2hrs of response time.
          </p>
        </div>
        <div className='hww'>
        <h1 className='welcome' style={{color:"#282c34"}}>3- Book Appointments</h1>
          <p className='welcome_p' style={{color:"#282c34"}}>
            If needed, you can easily book an appointment with our doctors.
          </p>
        </div>
      </div>
    <Footer/>     
    </div>
      </div>
    </div>
  )
}

export default Home