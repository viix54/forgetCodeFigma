import React from 'react';
import './landing.scss';

import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

import { Navbar } from '../index';

export const Landing = () => {
  return (
    <>
      <article className="landing_page">
        <div className="landing_component">
          <header>
            <Navbar />
          </header>
          <section>
            <div className="landing_paragraph">
              {/* <div className="landing_text"> */}
              <header>
                <h3>Startup 3</h3>
                <div className="changing_main_text">
                  <FaRegArrowAltCircleLeft size={30} className="left_arrow" />
                  <h1>Forget About Code</h1>
                  <FaRegArrowAltCircleRight size={30} className="right_arrow" />
                </div>
              </header>
              <p>
                Startup Framework gives you complete freedom over your creative process — you don’t
                have to think about any technical aspects. There are no limits and absolutely no
                coding.{' '}
              </p>
              <div className="landing_pages_bar">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <footer>

                <Button style={{ borderRadius: '20px' }}>Create an Account</Button>

                {/* <Button variant="success">Primary</Button>{' '} */}
              </footer>
              {/* </div> */}
            </div>
          </section>
        </div>
      </article>
    </>
  );
};
