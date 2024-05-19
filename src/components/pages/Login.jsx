import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import InpComp from '../reusable/InpComp';

const Login = () => {
  document.title = "Login";
  const navigate = useNavigate();

  const loginSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    pass: Yup.string().min(8).max(20).required('Password must be at least 8 number')
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      pass: ""
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        if (storedUser.email === values.email && storedUser.pass === values.pass) {
          navigate('/');
        } else {
          alert('Invalid email or password');
        }
      } else {
        alert('No user found. Please sign up first.');
      }
      actions.resetForm();
    },
  });

  return (
    <>
      <h1 className='text-center'>Login Page</h1>
      <form className='col-6 offset-3 my-5' onSubmit={handleSubmit}>
        <div className="mb-3">
          <InpComp value={values.email} id="email" onChange={handleChange} onBlur={handleBlur} name="email" type="email" label="Email" />
          {errors.email && touched.email ? (
            <div id="emailHelp" className="text-danger">{errors.email}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <InpComp value={values.pass} id="pass" onChange={handleChange} onBlur={handleBlur} name="pass" type="password" label="Password" />
          {errors.pass && touched.pass ? (
            <div id="passHelp" className="text-danger">{errors.pass}</div>
          ) : null}
        </div>
        <button className='btn btn-primary' type='submit'>Login</button>
      </form>
    </>
  );
}

export default Login;
