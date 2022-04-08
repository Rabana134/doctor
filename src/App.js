import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Login from './components/Reg/Login';
import Register from './components/Reg/Register';
import Forgot from './components/Reg/Forgot';
import Message from './components/Message/Message';
import AdminM from './components/Message/AdminM';
import Login_Ad from './components/Reg/Login_Ad';
import DoctorReplies from './components/Message/DoctorReplies';

function App() {
  return (
    <div>
    <Router >
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/contact-us' element={<ContactUs/>} />
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/signup' element={<Register/>} />
    <Route exact path='/forgot' element={<Forgot/>} />
    <Route exact path='/message' element={<Message/>} />
    <Route exact path='/doctor' element={<AdminM/>} />
    <Route exact path='/doctor_message/:Id' element={<DoctorReplies/>} />
    <Route exact path='/admin' element={<Login_Ad/>} />
    </Routes>  
    </Router> 
    </div>
  );
}

export default App;
