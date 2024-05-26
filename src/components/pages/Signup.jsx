import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { singupSchema } from '../../schema';
import InpComp from '../reusable/InpComp';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  document.title = "Signup";
  const navigate = useNavigate();

  useEffect(() => {
    const storage = localStorage.getItem("isUserLoggedIn");
    if (storage) {
      navigate('/');
    }
  }, [navigate]);

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      pass: "",
      cPass: ""
    },
    validationSchema: singupSchema,
    onSubmit: (values, actions) => {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = storedUsers.some(user => user.email === values.email);
      if (userExists) {
        alert("Email has already been registered");
      } else {
        storedUsers.push(values);
        localStorage.setItem("users", JSON.stringify(storedUsers));
        localStorage.setItem("isUserLoggedIn", JSON.stringify(true));
        localStorage.setItem("loggedInUser", JSON.stringify(values.name));
        actions.resetForm();
        navigate('/');
      }
    },
  });

  return (
    <>
     <div className="css-top">
      <h1 className="display-5 fw-normal bg-body-tertiary text-center text-body-emphasis ">Signup Page</h1>
      </div>
      <form className='col-6 offset-3 my-5' onSubmit={handleSubmit}>
        <div className="mb-3">
          <InpComp value={values.name} id="name" onChange={handleChange} onBlur={handleBlur} name="name" type="text" label="Name" />
          {errors.name && touched.name ? (
            <div className="text-danger">{errors.name}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <InpComp value={values.email} id="email" onChange={handleChange} onBlur={handleBlur} name="email" type="email" label="Email" />
          {errors.email && touched.email ? (
            <div className="text-danger">{errors.email}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <InpComp value={values.pass} id="pass" onChange={handleChange} onBlur={handleBlur} name="pass" type="password" label="Password" />
          {errors.pass && touched.pass ? (
            <div className="text-danger">{errors.pass}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <InpComp value={values.cPass} id="cPass" onChange={handleChange} onBlur={handleBlur} name="cPass" type="password" label="Confirm Password" />
          {errors.cPass && touched.cPass ? (
            <div className="text-danger">{errors.cPass}</div>
          ) : null}
        </div>
        <button className='btn btn-primary' type='submit'>Signup</button>
      </form>
    </>
  );
};

export default Signup;



