import React from 'react';
import emailjs from 'emailjs-com';
import NavBar from './NavBar';

function ContactMe() {

  function sendEmail(e) {
    e.preventDefault();    

    emailjs.sendForm('service_jv3rnrp', 'template_r8muo5g', e.target, '2QtQnd5zc3ABDUUUZ')
      .then((result) => {
        if(alert('Message sent!')){}
        else    window.location.reload(); 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
    <NavBar/>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh',backgroundColor:'#e0e0e0'}}>
    <div style={{border:'2px solid black',borderRadius:'5px',width:'400px',textAlign:'center',padding:'20px',backgroundColor:'#C6081F'}} className='form'>     
    <form className="contact-form" onSubmit={sendEmail}>
        <h3 style={{color:'white'}}>Contact me</h3>
      <label style={{color:'white'}}>Your Name</label>
      <br/>
      <input type="text" name="from_name" required/>
      <br/>
      <label style={{color:'white'}}>Your Email</label>
      <br/>
      <input type="email" name="from_email" required/> 
      <br/> 
      <label style={{color:'white'}}>Message</label>
      <br/>
      <textarea name="message" required/>
      <br/>
      <input type="submit" value="Send" style={{marginTop:'10px'}}/>
    </form>
    </div>
    </div>
    
    </>
  )
}

export default ContactMe;