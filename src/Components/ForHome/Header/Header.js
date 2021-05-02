import React from 'react'
import './Header.css';
import img from '../../../Images/hero.jpg';
const Header = () => {
    return (
        <>
            <section className="header-main-area">
            <div className="overly">
                <div className="container">
                        <div className="header-main-flex">
                        <div className="header-info">
                            <h6>Quality Service</h6>
                            <h1>So Fresh & So Clean</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing. <br></br> elit Explicabo, praesentium?</p>

                            <button className='btn style'>Free Estimate</button>
                        </div>

                       
                        </div>

                    </div>
            </div>
            </section>   
        </>
    )
}

export default Header
