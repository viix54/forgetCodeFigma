import React from 'react';
import './landing.scss';

import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Button from 'react-bootstrap/Button';
import { IoMdCloseCircle } from 'react-icons/io';

import { Navbar } from '../index';

const clickOnBurger = () => {
  let menu = document.getElementsByClassName('mini_menu')[0];
  let wholeApp = document.getElementsByClassName('landing_paragraph')[0];
  let menu_shadow = document.getElementsByClassName('mini_menu_shadow')[0];
  let menu_button = document.getElementsByClassName('burger_menu')[0];
  let account_btn = document.getElementsByClassName('account_btn')[0];

  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    menu_shadow.style.display = 'block';
    wholeApp.style.opacity = 0.4;
    menu_button.style.display = 'none';
    account_btn.disabled = true;
    // menu_button.style.zIndex = 100;
  } else {
    account_btn.disabled = false;
    menu.style.display = 'none';
    menu_shadow.style.display = 'none';
    menu_button.style.display = 'block';
    wholeApp.style.opacity = 1;
  }
};

export const Landing = () => {
  return (
    <>
      <article className="landing_page">
        <div className="landing_component">
          <div className="mini_menu_shadow"></div>
          <div className="mini_menu">
            <Navbar />
            <IoMdCloseCircle className="close_button" onClick={clickOnBurger} />
          </div>
          <header>
            <Navbar />
          </header>
          <section>
            <div className="landing_paragraph">
              {/* <div className="landing_text"> */}
              <header className="landing_paragraph_header">
                <h3 className="landing_paragraph_header_startup">Startup 3</h3>
                <div className="landing_paragraph_header_burger_startup">
                  <h3 className="landing_paragraph_burger_header">Startup 3</h3>
                  <GiHamburgerMenu className="burger_menu" onClick={clickOnBurger} />
                </div>
                <div className="changing_main_text">
                  {/* <FaRegArrowAltCircleLeft size={30} className="left_arrow" /> */}
                  <div className="left_arrow_block">
                    <FaRegArrowAltCircleLeft size={30} className="left_arrow" />
                  </div>
                  <h1 className="landing_paragraph_header_forget">Forget About Code</h1>
                  <div className="right_arrow_block">
                    <FaRegArrowAltCircleRight size={30} className="right_arrow" />
                  </div>
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
                <Button style={{ borderRadius: '20px' }} className="account_btn">
                  Create an Account
                </Button>

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
