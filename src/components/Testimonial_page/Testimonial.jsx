import React from 'react';
import './testimonial.scss';

import { clients } from './clientsData';

const newClientOpinion = (client, index) => {
  return (
    <section key={index + 'person'}>
      <div className="person">
        {/* <div className="picture"></div> */}
        <img src={`../../src/assets/happy_clients/${client.photo}`} className="picture" alt="" />
        <div className="section_text">
          <p>{client.opinion}</p>
          <span>{client.firstName + ' ' + client.secondName}</span>
        </div>
      </div>
    </section>
  );
};

export const Testimonial = () => {
  return (
    <div className="testimonial_container">
      <article className="testimonial_article">
        <header>Our Happy Clients</header>
        <div className="happy_clients_sections">
          {clients.map((client, index) => newClientOpinion(client, index))}
        </div>
      </article>
    </div>
  );
};
