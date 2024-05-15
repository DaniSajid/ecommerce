import React from 'react'
import NavItem from './NavItem'
import { Link, NavLink } from 'react-router-dom'
import NavBtn from './NavBtn'
import NavLogo from './NavLogo'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><NavLogo/> Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
       <NavItem to="/" page="Home"/>
       <NavItem to="/category" page="Category"/>
       <NavItem to="/about" page="About"/>
      </ul>
     <div>
      <Link className='mx-2' to="/login" ><NavBtn BtnName="Login" /></Link>
      <Link to="/signup" ><NavBtn BtnName="Signup" /></Link>
     </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar