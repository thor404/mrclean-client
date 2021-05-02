import React from 'react'
import { projectData } from '../Services/data'
import {IoCheckmarkDoneSharp} from 'react-icons/io5';
import done from '../../../Images/done.svg'
import './Project.css';
const Project = () => {
    return (
        <>
            <section className="services-area bg-add">
               <div className="overly">
               <div className="container">
                    <div className="services-info">
                        <h5>Our Works</h5>
                        <h2>We Have Completed </h2>
                        <h3>Latest Works.</h3>
                    </div>

                    <div className="services-card-grid">
                        {
                            projectData.map((item) => {
                                return (
                                    <div className="service-card">
                                        <img src={item.img} alt="img"/>
                                        <div className="service-all-info">
                                        <div className="img-flex-pr">
                                        <img src={done} alt="img"/>
                                            <h4>{item.title}</h4>
                                        </div>
                                        
                                        {
                                            item.option.map((op) => {
                                                return (
                                                    <>
                                                    <div className='-flex'>
                                                    <IoCheckmarkDoneSharp className='-icon'/> 
                                                        <h6>{op}</h6>
                                                         
                                                    </div> 
                                                    </>
                                                )
                                            })
                                        }
                                        </div>
                                        </div>
                                )
                            })
                        }
                    </div>
                </div>
               </div>
            </section>    
        </>
    )
}

export default Project
