import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import app, { auth } from '../../firebase'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Register() {
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault() 
    
        if (!passwordRef.current.value) {
          return setError("Passwords is required")
        } else if (passwordRef.current.value < 8) {
          return setError('Password needs to be 8 characters or more');
        }
      
        if (!passwordConfirmRef.current.value) {
          return setError("Passwords is required")
        } else if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
      
    
        if (!emailRef.current.value) {
          return setError('Email required');
        } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
          return setError('Email address is invalid');
        }
    
        if (!nameRef.current.value) {
          return setError('full name required');
        }
     
        try {
            setLoading(true)
            setError("")
            await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then(userCredentials => {
                const user = userCredentials.user;
                app.database().ref('users/'+user.uid).set({
                    name:nameRef.current.value,
                    id:user.uid
                  }).then(() => {
                    history("/message")
                  })
                  .catch((error) => {
                    setError("Error while processing, please try again")
                  });
            })
            
           
          } catch (e) {
            setError("Failed to create an account")
            console.log(e)
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
      <label className='form-label'>Full Name*</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your full name'
            ref={nameRef} 
            required={true}
          />
      </div>
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
    <div>
    <label className='form-label'>Confirm Password*</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            ref={passwordConfirmRef}
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
        Register
        </button> 
        <div>
      <p style={{fontSize:"13px", display:"inline"}}><b>Do You Already Have An Account? <Link to="/login" >Log In</Link></b></p>  
      </div> 
           </form>
    </div>
    </div>
        <Footer/>
    </div>
  )
}

export default Register