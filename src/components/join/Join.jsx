import React from 'react'
import { useRef } from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rd2uwls', 'template_6wg24yb', form.current, '6oJ5WR6CKy6X8gpH7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="join" id="join">
        <div className="left-j">
            <hr />
            <div>
                <span className="stroke-text">READY TO </span>
                <span>LEVEL UP </span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className="stroke-text">WITH US?</span>
            </div>
        </div>

        <div className="right-j">
            <form  ref={form} className="email-container" onSubmit={sendEmail} >
                <input type="email" name="user_email"  placeholder="Enter your mail address"/>
                <button className='btn btn-join'>Join Now</button>
            </form>

        </div>
    </div>
  )
}

export default Join