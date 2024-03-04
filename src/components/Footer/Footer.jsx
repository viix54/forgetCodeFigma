import React from 'react';
import './footer.scss';

import { FaTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';

const footer_site_links = ['Tour', 'Features', 'Pricing Plans', 'Our Works', 'Brands', 'Contacts'];

const footer_header_links = {
  policy: 'Privacy Policy',
  terms: 'Terms',
  twitter: <FaTwitter />,
  facebook: <FaFacebook />,
  google: <FaGooglePlusG />,

  [Symbol.iterator]() {
    const priceData = Object.entries(this);
    let index = -1;
    return {
      next() {
        index++;
        return {
          value: priceData[index],
          done: index >= priceData.length,
        };
      },
    };
  },
};

export const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer_container">
        <header>
          <h1>Startup 3</h1>
          <ul>
            {Array.from(footer_header_links).map(([key, value]) => {
              return <li key={key + value}>{value}</li>;
            })}
          </ul>
        </header>
        <hr />
        <div className="links">
          <ul>
            {footer_site_links.map((link, index) => (
              <li key={index + link} className="footer_links">
                {link}
              </li>
            ))}
          </ul>
          <span>© 2017 Designmodo. All rights reserved.</span>
        </div>
      </article>
    </footer>
  );
};
