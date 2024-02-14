import React from 'react';
import './form_comp.scss';

export const FormComp = () => {
  return (
    <div className="form_article">
      <article>
        <section className="form_article_text_section">
          <header>We solve digital problems with an outstanding creative flare</header>
          <p>
            We have created a new product that will help designers, developers and companies create
            websites for their startups quickly and easily.
          </p>
        </section>
        <section className="form_article_auth_section">
          <div>Form</div>
        </section>
      </article>
    </div>
  );
};
