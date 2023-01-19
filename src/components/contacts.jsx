import React from "react";
import '../styles/contacts.css';
import { FullpageSection } from "@ap.cx/react-fullpage";
const Contacts = () => {

  return (
    <FullpageSection className="contacts" >
      <h1 data-aos='zoom-out'>Contacts</h1>
      <div className="contactsCard" data-aos='fade-up'>
        <div className="cardLeft">
          <h2>Send Me a Message</h2>
          <form>
            <label>
              <input type='text' name='name' placeholder='Your Name'></input>
            </label>
            <label>
              <input type='email' name='email' placeholder='Your Email'></input>
            </label>
            <label>
              <input type='text' name='subject' placeholder='Subject'></input>
            </label>
            <label>
              <textarea type='text' rows='8' name='message' placeholder='Message'></textarea>
            </label>
            <button>Send Message</button>
            
          </form>
        </div>
        <div className="socials"></div>
      </div>
    </FullpageSection>
  )
};

export default Contacts;