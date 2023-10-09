import React, { useState } from "react";
import footer from '../assets/footer.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
  };

  return (
    
  
    <div className="bg-fixed bg-center bg-cover flex items-center justify-center min-h-screen" style={{backgroundImage: `url(${footer})`}}>
      <div className="container max-w-4xl bg-slate-700 bg-opacity-30 p-5 mx-5 sm:mt-[100px] sm:mx-[100px] md:p-20 rounded-xl">

        <h2 className="text-slate-50 font-extrabold text-3xl md:text-[44px] pb-[20px]">Contact Me</h2>
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
      </div>
    </div>
  );
};

export default Contact;