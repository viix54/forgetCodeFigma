import React from 'react';
import './testimonial.scss';

import client1 from '../../assets/happy_clients/client1.jpg';

export const Testimonial = () => {
  return (
    <div className="testimonial_container">
      <article className="testimonial_article">
        <header>Our Happy Clients</header>
        <div className="happy_clients_sections">
          <section>
            <div className="picture"></div>
            <div className="section_text">
              <p>
                Get a fully retina ready site when you build with Startup Framework. Websites look
                sharper and more gorgeous on devices with retina display support
              </p>
              <span>Rayhan Curran</span>
            </div>
            {/* <img src={client1} alt="client" /> */}
          </section>
        </div>
      </article>
    </div>
  );
};
