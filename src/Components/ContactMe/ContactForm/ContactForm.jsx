// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import "./ContactForm.css";

// const ContactForm=()=>{
//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs
//         .sendForm('service_kwb8kcw', 'template_k7faomq', form.current, {
//           publicKey: 'aF_Fe76BUpYPM3L44',
//         })
//         .then(
//           () => {
//             console.log('SUCCESS!');
//             form.current.reset();
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//           },
//         );
//     };
//     return(
//         <>
//         <div className="contact-form-content">
//             <form ref={form} onSubmit={sendEmail}>
//                 <div className="name-container">
//                     <input type="text" name="firstname" placeholder="First Name"/>
//                     <input type="text" name="lastname" placeholder="Last Name"/>

//                 </div>
//                 <input type="text" name="email" placeholder="Email"/>
//                 <textarea type="text" name="message" placeholder="Message" rows={3}/>
//                 <button>SEND</button>
//             </form>

//         </div>
//         </>
//     );
// };
// export default ContactForm;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.email.value;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm('service_kwb8kcw', 'template_k7faomq', form.current, {
        publicKey: 'aF_Fe76BUpYPM3L44',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setErrorMessage(''); // Clear error message after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <>
      <div className="contact-form-content">
        <form ref={form} onSubmit={sendEmail}>
          <div className="name-container">
            <input type="text" name="firstname" placeholder="First Name" required />
            <input type="text" name="lastname" placeholder="Last Name" required />
          </div>
          <input type="text" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" rows={3} required />
          <button type="submit">SEND</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </>
  );
};

export default ContactForm;
