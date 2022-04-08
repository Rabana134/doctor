import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

function ContactUs() {
  return (
    <div>
    <Navbar/>
    <div style={{overflow:"hidden"}}>
      <div  className="contact">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScYySlRDbMTw4oQvwRJ16KbqJMUuQd8htgrlLD6HaWam4aDNA/viewform?embedded=true" width="640" height="912" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
     </div>
    </div>
    
     <Footer/>
 </div>
  )
}

export default ContactUs