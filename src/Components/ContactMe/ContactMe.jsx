import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
const ContactMe=()=>{
    return(
        <>
        <section className="contact-container" id='Contact'>
            <h5>Contact Me</h5>
            <div className="contact-content">
                <div style={{flex:1}}>
                    <ContactInfoCard
                    iconUrl="./assets/images/email.svg"
                    text="prathyushapanta@gmail.com"
                    click={()=>window.location='mailto:prathyushapanta@gmail.com'}
                    />
                    <ContactInfoCard
                    iconUrl="./assets/images/github.svg"
                    text="https://github.com/PantaPrathyushaReddy"
                    click={()=>{window.open("https://github.com/PantaPrathyushaReddy")}}
                    />
                </div>
                <div style={{flex:1}}>
                    <ContactForm/>
                </div>
            </div>

        </section>
        </>
    )
}
export default ContactMe;