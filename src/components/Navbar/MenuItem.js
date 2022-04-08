import { Link } from 'react-router-dom';

export const MenuItem = [
    {
        title: <Link to="/" style={{color:"white", textDecoration: "none"}}>Home</Link>,
        cName: 'nav-links'
    },
    {
        title: <Link to="/login" style={{color:"white", textDecoration: "none"}}>Book A Doctor</Link>,
        cName: 'nav-links'
    },
    {
        title: <Link to="#" style={{color:"white", textDecoration: "none"}}>About Us</Link>,
        cName: 'nav-links'
    },
    {
        title: <Link to="/contact-us" style={{color:"white", textDecoration: "none"}}>Contact Us</Link>,
        cName: 'nav-links'
    },
]