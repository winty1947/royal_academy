import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div className='navbar-logo'>
          <img src="https://cdn-icons-png.flaticon.com/256/6941/6941697.png" height={50}/>
          </div>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Acasă
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/after-school'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                After school
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/before-school'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Before school
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/optionale'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Opționale
              </Link>
            
            </li>

            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;