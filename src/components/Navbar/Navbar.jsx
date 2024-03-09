import React from 'react';
import './navbar.scss';

import { FaVolleyballBall } from 'react-icons/fa';

export const Navbar = () => {
  const navbarLinks = ['Home', 'Features', 'Pricing', 'Blog', 'Ball', 'Be'];
  return (
    <nav className="website_links">
      <ul className="website_links_list">
        {navbarLinks.map((link, index) => {
          return link === 'Ball' ? (
            <li className="website_links_list_link" key={index + link}>
              <FaVolleyballBall />
            </li>
          ) : (
            <li className="website_links_list_link" key={index + link}>
              <a href="#features">{link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
