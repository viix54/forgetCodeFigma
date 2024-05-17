import './form_comp.scss';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const changeAuthType = (e) => {
  e.target.style.borderBottom = '3px solid #1E0E62';
  switch (e.target.className) {
    case 'auth_type_sign_up':
      {
        document.getElementsByClassName('auth_type_login')[0].style.borderBottom =
          '3px solid lightgray';
      }
      break;
    case 'auth_type_login':
      {
        document.getElementsByClassName('auth_type_sign_up')[0].style.borderBottom =
          '3px solid lightgray';
      }
      break;
  }
};

export const FormComp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError('root', {
        message: 'This email is already taken',
      });
    }
  };

  return (
    <div className="form_article">
      <article>
        <section className="form_article_text_section">
          <header>We solve digital problems with an outstanding creative flare.</header>
          <p>
            We have created a new product that will help designers, developers and companies create
            websites for their startups quickly and easily.
          </p>
        </section>
        <section className="form_article_auth_section">
          <div>
            <div className="auth_type">
              <button className="auth_type_sign_up" onClick={(event) => changeAuthType(event)}>
                Sign Up
              </button>
              <button className="auth_type_login" onClick={(event) => changeAuthType(event)}>
                Login
              </button>
            </div>
            <div className="auth_form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register('email')}
                  type="text"
                  className="form-control email_field"
                  placeholder="Your email"
                  style={{ height: '50px' }}
                />
                {errors.email && (
                  <div style={{ color: 'red', textAlign: 'left' }}>{errors.email.message}</div>
                )}
                <input
                  {...register('password')}
                  type="password"
                  className="form-control password_field"
                  placeholder="Your password"
                  style={{ height: '50px' }}
                />
                {errors.password && (
                  <div style={{ color: 'red', textAlign: 'left' }}>{errors.password.message}</div>
                )}
                <button
                  disabled={isSubmitting}
                  type="sumbit"
                  className="btn btn-success btn-create-account">
                  {isSubmitting ? 'Loading...' : 'Create an Account'}
                </button>
                {errors.root && (
                  <div style={{ color: 'red', textAlign: 'left' }}>{errors.root.message}</div>
                )}
                <div className="or_lines">
                  <div />
                  <p>or</p>
                  <div />
                </div>
                <button type="sumbit" className="btn btn-info btn-login-twitter">
                  Login via Twitter
                </button>
              </form>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};
