import React from 'react';
import './features.scss';

import content_backgr from '../../assets/features_macbook.png';
import { IoDiamondOutline } from 'react-icons/io5';
import { HiOutlineSquare2Stack } from 'react-icons/hi2';

export const Features = () => {
  return (
    <div className="features_page">
      <article className="features_page_article">
        <section className="features_page_section">
          <div className="features_macbook">
            <img />
          </div>
          <div className="main_text">
            <div className="main_text_header">
              <header>
                <h1 id="features">We Create Something New</h1>
              </header>
              <p>
                We have created a new product that will help designers, developers and companies
                create websites for their startups quickly and easily.
              </p>
            </div>
            <div className="main_text_features">
              <section className="main_text_features_first">
                <HiOutlineSquare2Stack className="feature_square_comp" />
                <header>30 New feature pages</header>
                <p>Startup Framework contains components and complex blocks which can easily. </p>
              </section>
              <section className="main_text_features_second">
                <IoDiamondOutline className="feature_diamond_comp" height={'37px'} />
                <header>Useful Symbol Components</header>
                <p>Samples will show you the feeling on how to play around using the components.</p>
              </section>
            </div>
          </div>
          <div className="features_bar">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </article>
    </div>
  );
};
