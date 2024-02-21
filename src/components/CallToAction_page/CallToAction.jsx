import React from 'react';
import './callToAction.scss';

import { FaPlay } from 'react-icons/fa';

export const CallToAction = () => {
  return (
    <div className="callToAction_container">
      <article>
        <section>
          <header>
            Easy to setup. <br />
            Easy to maintain
          </header>
          <p>
            Bootstrap is a widely-used, sleek, intuitive and <br />
            powerful front-end framework for faster and <br />
            easier web development.
          </p>
          <div className="button_container">
            <button className="btn btn-danger btn_play">
              <FaPlay />
            </button>
            <button className="btn btn-primary btn_getStarted">Get Started</button>
          </div>
        </section>
      </article>
    </div>
  );
};
