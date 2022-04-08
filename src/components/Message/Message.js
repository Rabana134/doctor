import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import app, { auth, storage } from '../../firebase'
import Navbar from '../Navbar/Navbar'

function Message() {
    const messageRef = useRef()
    const[user, setUser] = useState("");
    const[name, setName] = useState("");
    const[value, setValue] = useState("");
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const history = useNavigate()
    var key = app.database().ref().push().key;
    const [list, setList] = useState([])
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user!=null)
            {
               setUser(user)
               app.database().ref('users/'+user.uid+'/name').on("value", snapshot => {
                setName(snapshot.val())
               });
               app.database().ref("message/"+user.uid).on("value", snapshot => {
                let memberlist = [];
                snapshot.forEach(snap => {
                    memberlist.push(snap.val());
                });
                setList(memberlist)
              });
            }
            else{
                history("/login")
            }
          })
    }, [])
    
    const handleSend=()=>{
        if(value!=""){
            app.database().ref('message/'+user.uid).push().update({
                message : messageRef.current.value,
                id : user.uid,
                name : name
              })
              app.database().ref('list/').once("value", snapshot => {
                app.database().ref('list/'+user.uid).update({
                  message : "new",
                  name: name,
                  num: snapshot.numChildren()+1,
                  id:user.uid
                })
                });
                setValue("")
        }
    }
    async function handleSendFile(e){
        e.preventDefault();
       var Fname = selectedFile.name
       console.log(Fname)
       var ext =  Fname.split('.').pop();
        const uploadTask = storage.ref(`files/${key}.${ext}`).put(selectedFile);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, () => {
        // complete function ....
        storage.ref('files').child(key+"."+ext).getDownloadURL().then(url => {
            app.database().ref('message/'+user.uid).push().update({
                file : url,
                id : user.uid,
                name : name
              })
              app.database().ref('list/').once("value", snapshot => {
              app.database().ref('list/'+user.uid).update({
                message : "new",
                name: name,
                num: snapshot.numChildren()+1,
                id:user.uid
              })
              });
        })
        setIsFilePicked(false)
    });
    }
  return (
    <div style={{backgroundColor:"lightgrey"}}>
    <Navbar/>
    <div style={{height:"80vh",overflowY:"scroll"}} className="hwwscroll">
    {list.map(data => {
                
                return (
                    <div style={{margin:"3rem"}}>
                   {
                       data.name !="Doctor"?
                       <div style={{margin:"1rem",padding:"1rem",background:"white",borderRadius:"10px"}} >
                           <b style={{marginLeft:"1rem"}}>{data.name}</b> 
                           {data.file?
                           <>
                           <p style={{color:"blue", cursor:"pointer"}} onClick={()=>{window.open(data.file, "_blank")}}>
                            View file 
                           </p>
                           <i class="fas fa-paperclip" style={{color:"black"}}></i>
                           </>
                           :
                           <></>
                           }
                           <p>
                           {data.message}
                           </p>
                       </div>
                       :
                       <div style={{margin:"1rem",padding:"1rem",background:"#282c34",borderRadius:"10px"}} >
                           <b style={{marginLeft:"1rem",color:"white"}}>{data.name}</b> 
                           {data.file?
                           <>
                           <p style={{color:"blue", cursor:"pointer"}} onClick={()=>{window.open(data.file, "_blank")}}>
                            View file 
                           </p>
                           <i class="fas fa-paperclip" style={{color:"white"}}></i>
                           </>
                           :
                           <></>
                           }
                           <p style={{color:"white"}}>
                           {data.message}
                           </p>
                       </div>

                   }
                   </div>
                );
               
                })}
    </div>
    <div>
    {
        isFilePicked?
        <div style={{margin:"0rem 1rem", width:"fit-content"}}>
              <b onClick={handleSendFile}>Send the selected File</b>
              <i class="fas fa-paper-plane" style={{fontSize:"1.5rem",color:"#282c34",cursor:"pointer"}}
    onClick={handleSendFile}></i>

<b onClick={()=>{
        setSelectedFile(null)
        setIsFilePicked(false)
    }} style={{marginLeft:"1rem"}}>Cancel</b>
<i class="fas fa-window-close" style={{fontSize:"1.5rem",color:"#282c34",cursor:"pointer"}}
    onClick={()=>{
        setIsFilePicked(false)
    }}></i>
        </div>
        :
        <>
            
        </>
    }
    </div>
    <div style={{width:"fit-content",margin:"0px auto"}}>
    <div style={{width:"fit-content",display:"inline-block"}}>
    <textarea
           style={{width:"70vw",marginLeft:"0.5rem"}}
            className='form-input'
            onChange={(v)=>{setValue(v.target.value)}}
            type='text'
            name='text'
            placeholder='Enter your message'
            required={true}
            ref= {messageRef}
            value={value}
          />
    </div>
    <div style={{width:"fit-content",display:"inline-block",verticalAlign:"top"}}>
    <label class="custom-file-upload">
    <input type="file" onChange={changeHandler}/>
    <i class="fas fa-paperclip" style={{fontSize:"1.5rem",margin:"1rem",color:"#282c34",cursor:"pointer"}}></i>
</label>
   
    <i class="fas fa-paper-plane" style={{fontSize:"1.5rem",color:"#282c34",cursor:"pointer"}}
    onClick={handleSend}></i>
    </div>
    </div>
    </div>
  )
}

export default Message