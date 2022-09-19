import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const getInputContainerClass = (state) => {
    return state ? 'inputFieldContainer moveUp' : 'inputFieldContainer';
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) return;

    setName('');
    setEmail('');
    setMessage('');

    emailjs.sendForm(
      'service_u34fd5j',
      'template_as6rgmv',
      form.current,
      'nhM5ZYdNE5pxT7fCY'
    );

    form.current.reset();
  };

  return (
    <form
      className="rounded-lg border-8 border-darkGray bg-black p-4 text-white lg:basis-1/2 lg:self-start"
      ref={form}
      onSubmit={sendEmail}
    >
      <h2 className="my-4 text-3xl font-bold">Let's Connect</h2>
      <div
        className={
          getInputContainerClass(name) + " before:content-['YOUR_NAME'] "
        }
      >
        <input
          type="text"
          className="inputField"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div
        className={
          getInputContainerClass(email) + " before:content-['YOUR_EMAIL'] "
        }
      >
        <input
          type="text"
          className="inputField"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div
        className={
          getInputContainerClass(message) +
          " before:content-['HOW_CAN_WE_HELP?'] "
        }
      >
        <textarea
          className="inputField h-32"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className="button mt-6 bg-darkGray">Submit</button>
    </form>
  );
};

export default ContactForm;
