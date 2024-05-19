import React, { useEffect, useState } from 'react'
import NavItem from './NavItem'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import NavBtn from './NavBtn'
import NavLogo from './NavLogo'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="navbar  navbar-expand-md fixed-top bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#"><NavLogo /> Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <NavItem to="/" page="Home" />
            <NavItem to="/category" page="Category" />
            <NavItem to="/about" page="About" />
          </ul>
          <div>
            <i class="bi bi-cart mx-2 text-white css-nav-icon"></i>
            {isLoggedIn ? (
              <NavBtn className='btn btn-primary mx-1' BtnName="Logout" onClick={handleLogout}>Logout</NavBtn>
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
  )
}

export default Navbar