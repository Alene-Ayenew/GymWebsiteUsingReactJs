
import React,{useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

function Join() {
    const form =useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_vmjzgje','template_psq3v39', form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text)
        });
    };
  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text' >READY TO</span>
                <span>LEVEL UP </span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className='email-container' onSubmit={sendEmail} >
                <input type="email" name="user_email" id="" placeholder='Enter your email address'/>
                <button className='btn btn-j'>Join now</button>

            </form>
   
        </div>
    </div>
  )
}

export default Join