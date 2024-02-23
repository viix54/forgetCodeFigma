import React from 'react';

import './contact.scss';
import { FaPhone } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { MdApartment } from 'react-icons/md';

export const Contact = () => {
  return (
    <div className="contact_container">
      <article>
        <section className="contact_text">
          <header>Let’s Keep in Touch</header>
          <p>
            We have created a new product that will help designers, developers and companies create
            websites for their startups quickly and easily.
          </p>
          <span>
            <FaPhone />
            +1 555 505 5050
          </span>
          <span>
            <IoMail />
            info@designmodo.com
          </span>
          <span>
            <MdApartment size={40} />
            San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909
          </span>
        </section>
        <section className="contact_form">
          <form>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
          </form>
        </section>
      </article>
    </div>
  );
};
