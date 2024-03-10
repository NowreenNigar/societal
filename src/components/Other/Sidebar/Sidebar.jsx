import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    return(
        <div  className="sidebar-wrapper">
            <div className="header">Hope Haven</div>
            <div className="links">
            <nav>
            <Link to="/"><div className="link"><img className='icons'src="https://www.reshot.com/preview-assets/icons/Z7WCS9385Y/login-Z7WCS9385Y.svg"/>Login</div></Link>
            <Link to="/Landingpage"><div className="link"><img className='icons'src="https://www.reshot.com/preview-assets/icons/G4U8ZVKCDQ/home-G4U8ZVKCDQ.svg"/>Home</div></Link>
            <Link to="/about"><div className="link"><img className='icons'src="https://www.reshot.com/preview-assets/icons/7D3B9WSH4N/about-7D3B9WSH4N.svg"/>About</div></Link>
            <Link to="/contact"> <div className="link"><img className='icons'src="https://www.reshot.com/preview-assets/icons/YVWNPQ25CS/contact-us-YVWNPQ25CS.svg"/>Contact</div></Link>
            <Link to="/createorphanage"> <div className="link"><img className='icons'src="https://www.reshot.com/preview-assets/icons/GVLTZEY7WB/register-GVLTZEY7WB.svg"/>Register Orphanage</div></Link>
            <Link to="/Orphanage"> <div className="link"><img className='icons'src="https://cdn.iconscout.com/icon/premium/png-512-thumb/orphan-1470913-1245571.png?f=webp&w=512"/>Orphanages</div></Link>
            <Link to="/admin"> <div className="link"><img className='icons'src="https://img.icons8.com/?size=100&id=52233&format=png"/>Admin</div></Link>
            </nav>
            </div>
        </div>
    )
}
export default Sidebar
