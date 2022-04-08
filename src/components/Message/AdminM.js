import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import app from '../../firebase'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function AdminM() {
    const [list, setList] = useState([])
    const history = useNavigate()
    useEffect(() => {
        app.database().ref("list").orderByChild("num").on("value", snapshot => {
            let memberlist = [];
            snapshot.forEach(snap => {
                memberlist.push(snap.val());
            });
            setList(memberlist)
          });
    }, [])
    
  return (
    <div>
    <Navbar/>
    <div>
    <h1 style={{textAlign:"center",color:"black"}} className="welcome">Patients</h1>
    {list.map(data => {
                
                return (
                    <div style={{cursor:"pointer"}} onClick={()=>{
                         history("/doctor_message/"+data.id)
                    }}>
                   {
                       data.message =="new"?
                       <>
                           <b style={{marginLeft:"1rem"}}>{data.name}</b>
                           <i class="fas fa-check-circle" style={{float:"right"}}></i>
                       </>
                       :
                       <>
                           <p style={{marginLeft:"1rem"}}>
                           {data.name}
                           </p>
                       </>
                   }
                   <hr/>
                   </div>
                );
               
                })}
    </div>
    <Footer/>
    </div>
  )
}

export default AdminM