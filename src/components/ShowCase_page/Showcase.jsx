import React from 'react';

import './showcase.scss';
import { lastWorks } from './last_works_data';

const lastWork = (work, index) => {
  return (
    <section key={index + work.name}>
      <img src={`../../src/assets/last_works/${work.pic}`} alt={`last work ${index + 1}`} />
      <span>{work.type}</span>
      <h1>{work.name}</h1>
    </section>
  );
};

export const Showcase = () => {
  return (
    <div className="showcase_container">
      <article>
        <header>
          Last works
          <button>View all Works</button>
        </header>
        <section className="last_works_container">
          {lastWorks.map((work, index) => lastWork(work, index))}
        </section>
      </article>
    </div>
  );
};
