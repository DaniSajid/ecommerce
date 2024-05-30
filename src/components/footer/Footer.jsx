import React from 'react'
import NavItem from '../header/NavItem'
import FooterItem from './FooterItem'
import { FacebookOutlined, Instagram, LinkedIn, X } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
   <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div className="col mb-3">
                <a href="/" className="font-bold d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    <img src="shoesImages/12.png" className="img-css" alt=""/>TrendyTreads
                </a>
            </div>
            <div className="col mb-3">
                <h5>Pages</h5>
                <ul className="nav flex-column">
                  <FooterItem className="text-dark text-decoration-none" to="/" name="Home" />       
                  <FooterItem className="text-dark text-decoration-none" to="/category" name="Category" />       
                  <FooterItem className="text-dark text-decoration-none" to="/about" name="About" />       
                </ul>
            </div>
            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link text-dark p-0 text-body-secondary">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link text-dark p-0 text-body-secondary">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link text-dark p-0 text-body-secondary">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link text-dark p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link text-dark p-0 text-body-secondary">About</a></li>
                </ul>
            </div>
        
            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link text-dark p-0 text-body-secondary">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link text-dark p-0 text-body-secondary">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link text-dark p-0 text-body-secondary">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link text-dark p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link text-dark p-0 text-body-secondary">About</a></li>
                </ul>
            </div>
            <div className="col mb-3">
                <p className="font-bold offset-6">Social Info</p>
                <ul className="nav flex-row justify-content-end  ">
                    <li className="ms-3"><a className="text-dark mx-1 text-dark" href="#"><FacebookOutlined/></a></li>
                    <li className="ms-3"><a className="text-dark mx-1 text-dark" href="#"><Instagram/></a></li>
                    <li className="ms-3"><a className="text-dark mx-1 text-dark" href="#"><LinkedIn/></a></li>
                    <li className="ms-3"><a className="text-dark mx-1 text-dark" href="#"><X/></a></li>
                </ul>
            </div>
        </footer>
        </div>
    </>
  )
}

export default Footer