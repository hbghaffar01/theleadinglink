import React, { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulated email submission
    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        phone: "",
      });
    }, 2000);
  };

  const inputClasses = (fieldName) => `
    bg-tertiary 
    py-4 px-6 
    text-white 
    rounded-lg 
    outline-none 
    border-none 
    font-medium
    placeholder:transition-all 
    placeholder:duration-300 
    placeholder:ease-in-out
    ${focusedField === fieldName ? 'placeholder:text-xl placeholder:opacity-70' : 'placeholder:text-base'}
  `;

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <div className="flex-1 bg-black-100 p-8 rounded-2xl">
        <h3 className="text-4xl font-bold text-white">Contact us</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              placeholder="Good Name"
              className={inputClasses('name')}
            />
          </label>
          
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              placeholder="Email Address"
              className={inputClasses('email')}
            />
          </label>
          
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Phone</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              onFocus={() => handleFocus('phone')}
              onBlur={handleBlur}
              placeholder="Phone Number"
              className={inputClasses('phone')}
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-opacity-90 transition-all"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;