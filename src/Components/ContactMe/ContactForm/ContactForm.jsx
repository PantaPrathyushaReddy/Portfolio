import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css";

const ContactForm=()=>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_kwb8kcw', 'template_k7faomq', form.current, {
          publicKey: 'aF_Fe76BUpYPM3L44',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return(
        <>
        <div className="contact-form-content">
            <form ref={form} onSubmit={sendEmail}>
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="First Name"/>
                    <input type="text" name="lastname" placeholder="Last Name"/>

                </div>
                <input type="text" name="email" placeholder="Email"/>
                <textarea type="text" name="message" placeholder="Message" rows={3}/>
                <button>SEND</button>
            </form>

        </div>
        </>
    );
};
export default ContactForm;

