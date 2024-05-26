import React, { useEffect } from 'react';
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

  useEffect(() => {
    const storage = localStorage.getItem("isUserLoggedIn");
    if (storage) {
      navigate('/');
    }
  }, [navigate]);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      pass: ""
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

      const user = storedUsers.find(user => user.email === values.email && user.pass === values.pass);

      if (user) {
        localStorage.setItem('isUserLoggedIn', JSON.stringify(true));
        localStorage.setItem('loggedInUser', JSON.stringify(user.name)); // Store logged-in user's name
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
      actions.resetForm();
    },
  });

  return (
    <>
      <div className="css-top">
      <h1 className="display-5 fw-normal bg-body-tertiary text-center text-body-emphasis ">Login Page</h1>
      </div>
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
