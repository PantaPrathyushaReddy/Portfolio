import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
    const handleDownload=()=>{
        const pdfurl='./assets/images/Prathyusha Reddy.pdf';
        const link=document.createElement('a');
        link.href=pdfurl;
        link.download='Prathyusha Reddy.pdf';
        document.body.appendChild(link);
        link.click();
    }

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    {/* <h1 className="logo">ℙ𝕣𝕒𝕥𝕙𝕪𝕦𝕤𝕙𝕒</h1> */}
                    <img className="logo" src="./assets/images/Nameimage_Prathyusha.jpg" alt="Image is not loaded"/>
                    <ul>
                        <li><a className="menu_item" href="#Hero">Home</a></li>
                        <li><a className="menu_item" href="#Skills">Skills</a></li>
                        <li><a className="menu_item" href="#Work">Work Experience</a></li>
                        <li><a className="menu_item" href="#Contact"> Contact Me</a></li>
                        <button className="contact_btn" onClick={handleDownload}>Download Resume</button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
