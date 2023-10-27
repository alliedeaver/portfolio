import React from 'react';
import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
//at the bottom of the page with an open form to send a message 

const Contact = () => {
  return (
    <div className="card fixed-bottom mb-5 w-50 offset-3 p-5">
      <h1 className='contact center fst-italic mb-4' >
        contact me
      </h1>
         <div className="row">
        <form action="https://getform.io/f/eda533af-a77b-475a-98bb-b8b2b66e4a16" method="POST" >
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="First Name" name="first_name" type="text"  />
                {/* <label>First Name</label> */}
            </div>
            <div className="input-field col s6">
              <input placeholder="Last Name" name="last_name" type="text" className="validate"/>
                {/* <label for="last_name">Last Name</label> */}
            </div>
          </div>
          {/* <div className="row">
          </div> */}
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Message" name="message" type="text" className="validate"/>
                {/* <label for="message">Message</label> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Email" name="email" type="text" className="validate"/>
                {/* <label for="email">Email</label> */}
            </div>
          </div>
          <div className="row">
            <div className="col s12">
            
              <div className="input-field inline">
                <input placeholder="Subject"  name="email_inline" type="text" className="validate"/>
                  {/* <label for="email_inline">Subject</label> */}
                  <span className="helper-text" data-error="wrong" data-success="right"></span>
              </div>
            </div>
          </div>
          <Button variant='secondary' type="submit">Submit</Button>
        </form>
        </div>
      </div>
  )
}

export default Contact;

//for the submit form 

