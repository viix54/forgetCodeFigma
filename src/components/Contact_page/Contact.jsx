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
              <label htmlFor="firstNameInput" className="name_container">
                Your name
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  id="firstNameInput"
                />
              </label>
              <label htmlFor="budget" className="budget_container">
                Budget
                <select className="form-select" id="budget">
                  <option selected value="500">
                    500 $
                  </option>
                  <option value="600">600 $</option>
                  <option value="700">700 $</option>
                  <option value="800">800 $</option>
                </select>
              </label>
            </div>
            <label htmlFor="mail">
              Input field
              <input type="text" className="form-control" placeholder="name@mail.com" id="mail" />
            </label>
            <label htmlFor="message">
              Your message
              <textarea
                className="form-control"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message"></textarea>
            </label>
            <footer>
              <div className="form-check">
                <label className="form-check-label footer_checkbox" htmlFor="flexCheckChecked">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  Send me a copy
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
