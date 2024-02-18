import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
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
    } catch (error) {
      setError('root', {
        message: 'This email os already taken',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: 'Email is required',
          validate: (value) => {
            if (!value.includes('@')) {
              return 'Email must include @';
            }
            return true;
          }, // custom validation
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && <div>{errors.email.message}</div>}
      <input
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password has to have at least 8 characters',
          },
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && <div>{errors.password.message}</div>}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Loading...' : 'Submit'}
      </button>
      {errors.root && <div>{errors.root.message}</div>}
    </form>
  );
};

export default Form;
