<<<<<<< HEAD

import footer from '../assets/footer.jpg';
=======
import React, { useState } from "react";
import footer from '../assets/footer.jpg'
>>>>>>> parent of f28f0b6 (test email)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

<<<<<<< HEAD
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
    
=======
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  
    try {
      const response = await fetch('/your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle a successful response here
      } else {
        // Handle errors here
      }
    } catch (error) {
      // Handle network errors here
    }
>>>>>>> parent of f28f0b6 (test email)
  };

  return (
    
  
    <div className="bg-fixed bg-center bg-cover flex items-center justify-center min-h-screen" style={{backgroundImage: `url(${footer})`}}>
      <div className="container max-w-4xl bg-slate-700 bg-opacity-30 p-5 mx-5 sm:mt-[100px] sm:mx-[100px] md:p-20 rounded-xl">

        <h2 className="text-slate-50 font-extrabold text-3xl md:text-[44px] pb-[20px]">Contact Me</h2>
<<<<<<< HEAD
            <form ref={form} onSubmit={sendEmail}>
              <label className="block text-slate-50 text-md font-bold mb-2" >Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" value={user} type="text" name="user_name" onChange={(e) => setUser(e.target.value)} />
              
              <label className="block text-slate-50 text-md font-bold mb-2" >Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" value={email} type="email" name="user_email" onChange={(e) => setEmail(e.target.value)} />
              
              <label className="block text-slate-50 text-md font-bold mb-2">Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" value={message} name="message" onChange={(e) => setMessage(e.target.value)} />
              
              <button type="submit">Send Email</button>
            </form>
=======
        <form onSubmit={handleSubmit} className=" rounded-lg  mb-4"> 
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate-50 text-md font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
              placeholder="Your name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-50 text-md font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
              placeholder="Your email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-slate-50 text-md font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
              placeholder="Your message"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-slate-700 border-[2px] text-white border-slate-50   hover:bg-slate-600  font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
            Submit
          </button>
          </div>
        </form>
        <h1>INSERT ICONS HERE</h1>
>>>>>>> parent of f28f0b6 (test email)
      </div>
    </div>
  );
};

export default Contact;