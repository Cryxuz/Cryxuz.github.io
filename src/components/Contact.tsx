
import footer from '../assets/footer.jpg';


import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; // Import the 'emailjs-com' library

export const Contact = () => {

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = 'service_zgc3dhi'
    const templateId = 'template_gjigj6d'
    const publicKey = '9Me4x8u4wtwuLriqU'

    const templateParams = {
      form_user: user,
      form_email: email,
      to_name: 'Paul T',
      message: message,

    }

    
      emailjs.sendForm(`${serviceId}`, `${templateId}`, `${templateParams}`, `${publicKey}`)
        .then((result) => {
          console.log('Email sent successfully', result);
          setUser('')
          setEmail('')
          setMessage('')
        })
        .catch((error) => {
          console.log('Error sending message', error);
        });
    
  };

  return (
    <div className="bg-fixed bg-center bg-cover flex items-center justify-center min-h-screen" style={{ backgroundImage: `url(${footer})` }}>
       <div className="container max-w-4xl bg-slate-700 bg-opacity-30 p-5 mx-5 sm:mt-[100px] sm:mx-[100px] md:p-20 rounded-xl">
        <h2 className="text-slate-50 font-extrabold text-3xl md:text-[44px] pb-[20px]">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
              <label className="block text-slate-50 text-md font-bold mb-2" >Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" value={user} type="text" name="user_name" onChange={(e) => setUser(e.target.value)} />
              
              <label className="block text-slate-50 text-md font-bold mb-2" >Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" value={email} type="email" name="user_email" onChange={(e) => setEmail(e.target.value)} />
              
              <label className="block text-slate-50 text-md font-bold mb-2">Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" value={message} name="message" onChange={(e) => setMessage(e.target.value)} />
              
              <button type="submit">Send Email</button>
            </form>
      </div>
    </div>
  );
};

export default Contact;