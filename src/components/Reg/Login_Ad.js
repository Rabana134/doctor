import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import app, { auth } from '../../firebase'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Login_Ad() {
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [pass, setPass] = useState("")
    const history = useNavigate()
    const [user, setUser] = useState(null);

     async function handleSubmit(e) {
         e.preventDefault()
        app.database().ref('admin/password').on("value", snapshot => {
            setPass(snapshot.val())
           });
        if(passwordRef.current.value==pass)
        {
            history("/doctor")
        }
        else{
            setError("Wrong password")
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
      <h1 style={{textAlign:"center"}}>Only Open To Doctors</h1>
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
           </form>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login_Ad