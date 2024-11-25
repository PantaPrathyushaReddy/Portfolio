import React from "react";
import "./Hero.css"
const Hero=()=>{
    return(
        <>
        <section className="hero-container" id="Hero">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>Passionate Frontend Developer | Transforming  Ideas into Seamless and Visually Stunning Web Solutions</p>

        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                 <img src="logo192.png" alt="React"/>
                </div>
                <img  src="./assets/images/Prathyu_img.png" alt="React"/>
            </div>
            <div>
            <div className="tech-icon">
                 <img src="./assets/images/html-5.png" alt="React"/>
            </div>
            <div className="tech-icon">
                 <img src="./assets/images/css-3.png" alt="React"/>
            </div>
            <div className="tech-icon">
                 <img src="./assets/images/js.png" alt="React"/>
            </div>

        </div>

        </div>
        </section>
        </>
    )
}
export default Hero