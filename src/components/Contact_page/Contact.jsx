import './contact.scss';
import { FaPhone } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { MdApartment } from 'react-icons/md';

import { useForm } from 'react-hook-form';

import { useEffect } from 'react';

// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// const schema = z.object({
//   email: z.string().email(),
//   budget: z.string().required,
// });

export const Contact = () => {
  useEffect(() => {
    document.getElementById('flexCheckChecked').checked = true;
  }, []);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError('root', {
        message: 'This user already exists !',
      });
    }
  };

  return (
    <div className="contact_container">
      <article>
        <section className="contact_text">
          <header>Let’s Keep in Touch</header>
          <p>
            We have created a new product that will help designers, developers and companies create
            websites for their startups quickly and easily.
          </p>
          <span>
            <FaPhone />
            +1 555 505 5050
          </span>
          <span>
            <IoMail />
            info@designmodo.com
          </span>
          <span>
            <MdApartment size={40} />
            San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909
          </span>
        </section>
        <section className="contact_form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="nameAndBudget">
              <label htmlFor="firstNameInput" className="name_container">
                Your name
                <input
                  {...register('firstname', {
                    required: 'This field has to be filled up',
                  })}
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  id="firstNameInput"
                />
                {errors.firstname ? (
                  <div style={{ color: 'red', textTransform: 'none' }}>
                    {errors.firstname.message}
                  </div>
                ) : null}
              </label>
              <label htmlFor="budget" className="budget_container">
                Budget
                <select {...register('budget')} className="form-select" id="budget">
                  <option selected value="500">
                    500 $
                  </option>
                  <option value="600">600 $</option>
                  <option value="700">700 $</option>
                  <option value="800">800 $</option>
                </select>
              </label>
            </div>
            <label htmlFor="mail">
              Input field
              <input
                type="text"
                {...register('email', {
                  required: 'This field has to be filled up',
                })}
                className="form-control"
                placeholder="name@mail.com"
                id="mail"
              />
              {errors.email ? (
                <div style={{ color: 'red', textTransform: 'none' }}>{errors.email.message}</div>
              ) : null}
            </label>
            <label htmlFor="message">
              Your message
              <textarea
                className="form-control"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message"
                {...register('message')}></textarea>
            </label>
            <footer>
              <div className="form-check">
                <label className="form-check-label footer_checkbox" htmlFor="flexCheckChecked">
                  <input
                    {...register('sendCopyCheckBox')}
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  Send me a copy
                </label>
              </div>
              <button type="submit" className="btn btn-success">
                {!isSubmitting ? 'Send' : 'Sumbitting ...'}
              </button>
            </footer>
            {errors.root ? (
              <div style={{ color: 'red', textTransform: 'none' }}>{errors.root.message}</div>
            ) : null}
          </form>
        </section>
      </article>
    </div>
  );
};
