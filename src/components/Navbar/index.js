import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link ,useNavigate} from 'react-router-dom';
import './Navbar.css';
import { getAuth } from 'firebase/auth';
import { useAuth } from '../../context/AuthContext'
import { auth } from '../..';
function Navbar() {

  const [error, setError] = useState()
  const { currentUser, logout } = useAuth()
  const [profile, setProfile] = useState(null);

  const navigate = useNavigate();
  async function handleLogout() {
      setError("")

      try {
          await logout()
          navigate("/")
      } catch (e) {
          console.error(e)
          setError("Failed to log out")
      }
  }




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


  if(auth.currentUser ){

    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              TT
              <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              
              <li className='nav-item'>
              <Link
                  to='/profile'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
              </li>
              
             
              <li className='nav-item'>
              </li>
  
              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  
                >
                  
                </Link>
              </li>
            </ul>
            {button && <Button onClick={handleLogout} buttonStyle='btn--outline'>SIGN OUT</Button>}
          </div>
        </nav>
      </>
    );

  }else{

    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              TT
              <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              
              <li className='nav-item'>
              <Link
                  to='/sign-up'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
              </li>
              
             
              <li className='nav-item'>
              </li>
  
              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
          </div>
        </nav>
      </>
    );
  }
  
}

export default Navbar;