import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Form.css'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate()
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user!=null)
            {
                history("/message") 
            }
          })
    }, [])
    

    async function handleSubmit(e) {
        e.preventDefault()
      
        try {
          setError("")
          setLoading(true)
          await auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then(userCredentials => {
            history("/message")
          })
          .catch(error)
          
          
        } catch {
          setError("Failed to log in")
        }
        setLoading(false)
      }
  return (
    <div>
    <Navbar/>
    <div style={{overflow:"hidden"}}>
    <div style={{width:"fit-content",margin:"2rem auto"}}>
    <form onSubmit={handleSubmit} className='form' >
      <p style={{color: "red"}}>{error}</p>
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
    <div>
    <label className='form-label'>Password*</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            ref={passwordRef}
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
          Log in
        </button> 
        <div>
         <p className="form-content-right" style ={{ width:"100%",textAlign:"center"}}><Link to="/forgot">Forgot password?</Link></p> 
         <p style={{fontSize:"13px", display:"inline",textAlign:"center"}}><b><Link to="/signup" >Sign Up</Link> if you're new here.</b></p> 
        </div> 
           </form>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login