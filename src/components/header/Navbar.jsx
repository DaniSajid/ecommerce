import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import NavBtn from './NavBtn';
import NavLogo from './NavLogo';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem('isUserLoggedIn');
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (isLogin && loggedInUser) {
      setIsLoggedIn(true);
      setUserName(JSON.parse(loggedInUser));
    }
  });

  const handleLogout = () => {
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top css-low">
      <div className="container-fluid">
        <a className="navbar-brand text-dark" href="#"><NavLogo /> TrendyTreads</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <NavItem to="/" page="Home" />
            <NavItem to="/category" page="Category" />
            <NavItem to="/about" page="About" />
          </ul>
          <div>
            <i className="bi bi-cart mx-2 text-dark css-nav-icon"></i>
            {isLoggedIn ? (
              <>
                <NavBtn className="mx-3" BtnName={userName} />
                <NavBtn className='mx-1' BtnName="Logout" onClick={handleLogout} />
              </>
            ) : (
              <>
                <Link className='mx-2' to="/login"><NavBtn BtnName="Login" /></Link>
                <Link to="/signup" className='mx-1'><NavBtn BtnName="Signup" /></Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
