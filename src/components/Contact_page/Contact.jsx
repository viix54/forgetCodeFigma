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
            <div className="nameAndBudget">
              <label htmlFor="firstNameInput">Your name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="firstNameInput"
              />
              <label htmlFor="budget">Budget</label>
              <select className="form-select" id="budget">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <label htmlFor="mail">Input field</label>
            <input type="text" className="form-control" placeholder="name@mail.com" id="mail" />
            <label htmlFor="message">Your message</label>
            <textarea
              className="form-control"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"></textarea>
            <footer>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label footer_checkbox" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
              <button type="submit" className="btn btn-success">
                Send
              </button>
            </footer>
          </form>
        </section>
      </article>
    </div>
  );
};
