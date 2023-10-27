import React from 'react';
// import { Link } from "react-router-dom";
//at the bottom of the page with an open form to send a message 

const Contact = () => {
  return (
    <div className="card fixed-bottom mb-5 w-50 offset-3 p-5">
         <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate"/>
                <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate"/>
                <label for="password">Message</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate"/>
                <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
            
              <div class="input-field inline">
                <input id="email_inline" type="email" class="validate"/>
                  <label for="email_inline">Email</label>
                  <span class="helper-text" data-error="wrong" data-success="right"></span>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
  )
}

export default Contact;

//for the submit form 

