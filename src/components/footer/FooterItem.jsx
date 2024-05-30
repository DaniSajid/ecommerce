import React from 'react'
import { Link } from 'react-router-dom'

const FooterItem = ({ className, to, name }) => {
    return (
        <>
            <li className="nav-item mb-2"><Link className={className} to={to} >{name}</Link></li>
        </>
    )
}

export default FooterItem