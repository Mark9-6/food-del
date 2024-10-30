import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState("home");
    const{getTotalCartAmount,token,setToken} = useContext(StoreContext);
    const navigate = useNavigate();
    const logout =()=>{
       localStorage.removeItem("token")
       setToken("");
        navigate("/");
    }

    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.className = isDarkMode ? 'light' : 'dark';
    };

    const SunIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V2M12 22V20M4.22 4.22L2.8 2.8M21.2 21.2L19.78 19.78M2 12H4M20 12H22M4.22 19.78L2.8 21.2M19.78 4.22L21.2 2.8M12 18A6 6 0 1 0 12 6a6 6 0 0 0 0 12Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      
      const MoonIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      
 




    return (
        <div className='navbar'>
           <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link  to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
            <button onClick={toggleTheme}>
                    {isDarkMode ? <SunIcon/> : <MoonIcon/>}
                </button>
                <img src={assets.search_icon} />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img  src={assets.basket_icon} /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                {!token?
                <button onClick={()=>setShowLogin(true)}>sign in</button> :
                <div className='navbar-profile'>
                    <img src={assets.profile_icon}/>
                    <ul className='nav-profile-dropdown'>
                        <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon}/><p>Orders</p></li>
                        <hr/>
                        <li onClick={logout}><img src={assets.logout_icon}/><p>Logout</p></li>
                    </ul>
                 
                </div>
                }
                
            </div>
        </div>
    )
}

export default Navbar
