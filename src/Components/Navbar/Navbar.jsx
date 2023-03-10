
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import './navbar.scss'
const Navbar = () => {
  const [isScrolled,setIsScrolled]= useState(false);

  window.onscroll= ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll= null)
  };


  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
       
        </div>
        <div className="right">
        <Search className='icon'/>
        <span>NOUR</span>
        <Notifications className='icon'/>
        <img src="https://cdn.myanimelist.net/images/characters/4/489561.jpg" alt="" />
        
        <div className="profile">
        <ArrowDropDown className='icon'/>
        <div className="options">
          <span>Settings</span>
          <span>Logout</span>
        </div>
        </div>
        
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
