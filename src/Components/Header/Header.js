import React, { useRef, useEffect } from 'react';
import { BrowserRouter, NavLink, Switch, Route, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {

  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle('menu-collapse');
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains('menu-collapse')) {
      navbarLinks.current.classList.add('menu-collapse');
    }
  }

  return (
    
      <BrowserRouter style={{position:'absolute'}}>
        <nav className='navbar'>
          <div className='navbar-container'>  
            <a href="#" className='brand-title'><img src="https://i.imgur.com/YTf8IUD.png" alt="logo"/></a>
            <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div ref={navbarLinks} className='navbar-links menu-collapse'>
              <ul className='links-list'>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/about'>About</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/contact'>Contact</NavLink>
                </li>   
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'>
                    <input placeholder="search" type='text'></input>
                    <button>search</button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </BrowserRouter>
    
  );
}


export default Header;
