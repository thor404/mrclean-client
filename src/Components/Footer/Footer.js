import React from 'react'
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <section className="footer-area">
                <div className="container">
                    <div className="footer-info-grid">
                        <div className="footer-logo">
                            <h4>Mr. Cleaner</h4>
                            <p>Let us use our years of experience, skilled employees, and advanced procedures to ensure a clean and healthy environment for your employees, customers and guests <br />  <br /> Let us use our years of experience, skilled employees, and advanced procedures to ensure a clean and healthy environment for your employees, customers and guests</p>
                        </div>
                        <div className="services-footer">
                            <h4>Cleaning Services</h4>
                            <p>Apartment Cleaning</p>
                            <p>House Cleaning</p>
                            <p>Move In/ Move out</p>
                            <p>Carpet Cleaning</p>
                            <p>After Renovation</p>
                            <p>Curtain Cleaning</p>
                        </div>

                        <div className="contact-footer">
                            <h4>Contact Information</h4>
                            <p>3261 Anmoore Road Brooklyn, NY 11230</p>
                            <p>800-123-4567, Fax: 718-724-3312</p>
                            <p>officeone@youremail.com</p>
                            <p>Mon-Fri: 9:00 am – 5:00 pm <br/> Sat-Sun: 11:00 am – 16:00 pm</p>
                        </div>
                    </div>
                </div>

                <div className="footer-area">
                    <h4>&copy; Copyright by Mr. Cleaner</h4>
                    <div className="social-icons-flex">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaGithub className='icon' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
