import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
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
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav_wapper">
                <div className="nav_content">
                    {/* <h1 className="logo">ℙ𝕣𝕒𝕥𝕙𝕪𝕦𝕤𝕙𝕒 </h1> */}
                    <img className="logo" src="./assets/images/Nameimage_Prathyusha.jpg" alt="Image is not loaded"/>
                    
                    <ul>
                        <li><a className="menu_item" href="#Hero">Home</a></li>
                        <li><a className="menu_item" href="#Skills">Skills</a></li>
                        <li><a className="menu_item" href="#Work">Work Experience</a></li>
                        <li><a className="menu_item" href="#Contact"> Contact Me</a></li>
                        <button className="contact_btn" onClick={handleDownload}>Download Resume</button>
                    </ul>
                    <button className="menu_btn" onClick={toggleMenu}>
                        {openMenu ? <CloseIcon style={{ fontSize: "1.8rem" }} /> : <MenuIcon style={{ fontSize: "1.8rem" }} />}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

