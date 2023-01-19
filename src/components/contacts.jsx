import React from "react";
import '../styles/contacts.css';

const Contacts = () => {

  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <div className="contactsCard">
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
            <button>Submit</button>
            
          </form>
        </div>
        <div></div>
      </div>
    </div>
  )
};

export default Contacts;