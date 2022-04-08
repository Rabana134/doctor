import React from 'react'

function Footer() {
  return (
    <div>
          <div className='top' style={{marginTop:"1rem"}}>
      <h1 className='welcome' >Doctors Availability</h1>
      <div style={{width:"50vw", display:"inline-block"}}>
      <div style={{width:"fit-content", margin:"0px auto"}}>
      <p className='welcome_p'>Days</p>
      <p className='welcome_p'>- Monday : Available</p>
      <p className='welcome_p'>- Tuesday : Available</p>
      <p className='welcome_p'>- Wednesday : Available</p>
      <p className='welcome_p'>- Thursday : Available</p>
      <p className='welcome_p'>- Friday : Available</p>
      <p className='welcome_p'>- Saturday : Unavailable</p>
      <p className='welcome_p'>- Sunday : Unavailable</p>
      </div>
      </div>
      <div style={{width:"40vw", display:"inline-block", 
      verticalAlign:"top",marginLeft:"2rem",overflow:"hidden"}}>
        <div style={{width:"fit-content", margin:"0px auto"}}>
        <p className='welcome_p'>Doctors</p>
      <p className='welcome_p'>- Monday : Dr ....</p>
      <p className='welcome_p'>- Tuesday : Dr ....</p>
      <p className='welcome_p'>- Wednesday : Dr ....</p>
      <p className='welcome_p'>- Thursday : Dr ....</p>
      <p className='welcome_p'>- Friday : Dr ....</p>
      <p className='welcome_p'>- Saturday : Unavailable</p>
      <p className='welcome_p'>- Sunday : Unavailable</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer