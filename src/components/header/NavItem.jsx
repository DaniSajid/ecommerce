import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ to, page }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link isActive text-white" aria-current="page" to={to}>{page}</NavLink>
    </li>
  )
}

export default NavItem
