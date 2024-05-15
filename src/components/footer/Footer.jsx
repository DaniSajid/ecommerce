import React from 'react'
import NavItem from '../header/NavItem'

const Footer = () => {
  return (
    <>
      <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    <NavItem to="/" page="Home"/>
       <NavItem to="/category" page="Category"/>
       <NavItem to="/about" page="About"/>
    </ul>
    <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>
</div>
    </>
  )
}

export default Footer