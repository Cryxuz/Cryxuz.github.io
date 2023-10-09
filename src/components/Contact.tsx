import footer from '../assets/footer.jpg';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Import the 'emailjs-com' library

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_zgc3dhi', 'template_gjigj6d', form.current, '9Me4x8u4wtwuLriqU')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="bg-fixed bg-center bg-cover flex items-center justify-center min-h-screen" style={{ backgroundImage: `url(${footer})` }}>
       <div className="container max-w-4xl bg-slate-700 bg-opacity-30 p-5 mx-5 sm:mt-[100px] sm:mx-[100px] md:p-20 rounded-xl">
        <h2 className="text-slate-50 font-extrabold text-3xl md:text-[44px] pb-[20px]">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
              <label className="block text-slate-50 text-md font-bold mb-2" >Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" type="name" name="from_name" required/>
              
              <label className="block text-slate-50 text-md font-bold mb-2" >Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" type="email" name="from_email" required/>

              <label className="block text-slate-50 text-md font-bold mb-2">Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" name="message" />
              <input type="submit" value="Send" />
            </form>
      </div>
    </div>
  );
};

export default Contact;