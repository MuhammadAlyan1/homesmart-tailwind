import React from 'react';
import ContactForm from './ContactForm';
import Lamp from './Lamp';

const ContactUs = () => {
  return (
    <section className="overflow-hidden bg-black p-8 lg:mx-auto lg:flex lg:justify-center lg:px-[15%]">
      <Lamp />
      <ContactForm />
    </section>
  );
};

export default ContactUs;
