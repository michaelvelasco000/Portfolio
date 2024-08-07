import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = () => {
    const subject = 'Message From Portfolio';
    const mailtoLink = `mailto:michaelarianvelasco@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Email: ' + email + '\n\nMessage: ' + message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="page">
        <div className="margin"></div>
        <h2 className="text-black">Email:</h2>
        <div className="d-flex"> 
          <p className="text-dark-500">*</p>
          <input 
            type="email" 
            className="form-control text-dark bg-transparent border-0" 
            required 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        <h2 className="text-black">How Can We Help You?</h2>
        <div className="d-flex"> 
          <p className="text-dark-500">*</p>
          <textarea 
            className="form-control text-dark bg-transparent border-0" 
            rows="4" 
            required 
            placeholder="Your message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
          ></textarea>  
        </div>
        <button type="button" className="btn btn-dark mt-3" onClick={sendMail}>
          Send
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
