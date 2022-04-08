import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { MenuItem } from './MenuItem'
import './Navbar.css'

function Navbar(props) {
    const [clicked, setClicked] = useState(false)
    const [logged, setLogged] = useState(false)
    const [user, setUser] = useState(false)
    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if(user!=null)
        {
          setLogged(true)
          setUser(user)
        }
      })
    }, [])
    
    return (
        <nav className = "NavbarItems">
              <h1 className='logo'>DoctorHelp</h1>
              
              <ul className= 'nav-menu'>
               {MenuItem.map((item,index)=>{
                   return(
                    <li key ={index} >
                    <a className={item.cName} href={item.url}>
                    {item.title}
                    </a> 
                    </li>
                   )
               })}  
               </ul>
               {logged?
                      <b style={{color:"red",textDecoration:"none",
                      cursor:"pointer",float:"right",margin:"0.5rem"}} onClick={()=>{
                        auth.signOut()
                      }}>
                      LogOut
                      </b>
                      :
                      <>

                      </>
                    }
               <div className='menu_m'>
             <i className={clicked ? 'fas fa-times':'fas fa-bars'} style={{float:"right",margin:"0.5rem", marginRight:"1rem",fontSize:"17px",color:"white"}}
             onClick={()=>{setClicked(!clicked)}}></i>
             <ul className= {clicked ? 'nav-menu active' : 'nav-menu'}>
               {MenuItem.map((item,index)=>{
                   return(
                     <div className='App'>
                       <li key ={index} >
                    <a className={item.cName} style={{color:"white",textDecoration:"none"}}>
                    {item.title}
                    </a> 
                  
                    </li>
                     </div>
                    
                   )
               })} 
               
               </ul>
             </div>
              </nav>
    )
}

export default Navbar