import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import footer from '/images/footer.jpg';


export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [messageSent, setMessageSent] = useState(false);

  const validatePhoneNumber = (value: string) => {
   
    return /^\d+$/.test(value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const inputValue = e.target.value;

    
    if (!validatePhoneNumber(inputValue)) {
      
      e.target.value = '';
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_zgc3dhi', 'template_gjigj6d', form.current, '9Me4x8u4wtwuLriqU')
        .then((result) => {
          console.log(result.text);
          setMessageSent(true);
          form.current?.reset();
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };



  return (
    <div className="sticky top-0  xl:bg-fixed bg-center bg-cover flex items-center justify-center w-screen h-screen " style={{ backgroundImage: `url(${footer})` }}>
      <div className="container max-w-4xl bg-slate-700 bg-opacity-30 p-5 mx-5 sm:mt-[100px] sm:mx-[100px] md:p-20 rounded-xl">
        <h2 className="text-slate-50 font-extrabold text-3xl md:text-[44px] pb-[20px]">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label className="block text-slate-50 text-md font-bold mb-2">Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" type="name" name="from_name" required/>
              
          <label className="block text-slate-50 text-md font-bold mb-2">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" type="email" name="from_email" required/>

          <label className="block text-slate-50 text-md font-bold mb-2">Phone Number</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            type="tel"
            name="from_number"
            onChange={handlePhoneNumberChange}
          />
          
            <label className="block text-slate-50 text-md font-bold mb-2">Message</label> 
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200" name="message" required/> <div className='flex justify-center m-[3%]'> 
            <button className='bg-slate-700 p-[5px] rounded-lg border-emerald-500 border-[3px] hover:bg-emerald-400 hover:text-black' type="submit">Send Email</button>
            <br />
           
           </div>
           <div className='flex justify-center gap-[4%] pt-[5%] md:pt-[1%]'>
            <a href="https://github.com/Cryxuz" target="_blank" ><img  className="w-[70%] md:w-[100%]" src="/images/github.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/paul-david-tan-28b003266/" target="_blank" ><img className="w-[70%] md:w-[100%]" src="/images/linkedin.png" alt="" /></a>
           </div>
           {messageSent && <p className="text-green-500 block">Message Sent!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;