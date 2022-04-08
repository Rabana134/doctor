import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Forgot() {
    const emailRef = useRef()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setMessage("")
        setError("")
        setLoading(true)
        await auth.sendPasswordResetEmail(emailRef.current.value)
        setMessage("Check your email and reset your password")
      } catch {
        setError("Failed to reset password")
      }
  
      setLoading(false)
    }
  return (
    <div>
    <Navbar/>
    <div style={{width:"fit-content", margin:"2rem auto"}}>
    <form onSubmit={handleSubmit} className='form'>
      <p style={{color: "red"}}>{error}</p>
      <p style={{color: "green"}}>{message}</p> 
      <div>
      <label className='form-label'>Email*</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            ref={emailRef} 
            required={true}
          />
      </div>
      <button className="btn" type='submit' disabled={loading} style={{
            width: "100px",
            margin:"2rem auto",
            display:"table",
            background:"#282c34",
            color:"white"
           
        }}>
         Reset
        </button> 
      <div>
         <p className="form-content-right" style ={{ width:"100%"}}><Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link></p>   
        </div> 
     </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Forgot