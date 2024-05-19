import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { singupSchema } from '../../schema'
import InpComp from '../reusable/InpComp'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  document.title = "Signup";
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    pass: "",
    cPass: ""
  })

  useEffect(() => {
    const storage = localStorage.getItem("user");
    if (storage) {
      navigate('/'); 
    }
  }, [navigate]);

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: singupSchema,
    onSubmit: (values, action) => {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.email === values.email) {
        alert("email has already register") 
      } else {
        localStorage.setItem("user", JSON.stringify(values));
        setInitialValues(values);
        action.resetForm();
        navigate('/');
      }
    },
  });
//   let { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
//     initialValues: initialValues,
//     validationSchema: singupSchema,
//     onSubmit: (values, action) => {
//       setInitialValues(values)
//       action.resetForm();
//     },
//   })
// function setData(){
//       let storage = localStorage.getItem("user")
//      if(storage){
//      let parseData = JSON.parse(storage)

//      }else{
//       console.log("jkasdjasd")
//       localStorage.setItem("user",JSON.stringify(initialValues))
//      }
// }

  return (
    <>
      <h1 className='text-center'>SignUp Page </h1>
      <form className='col-6 offset-3 my-5' onSubmit={handleSubmit}>
        <div className="mb-3">
          <InpComp value={values.name} id="name" onChange={handleChange} onBlur={handleBlur} name="name" type="text" label="Name" />
          {errors.name && touched.name ? (
            <div id="emailHel2p" className="text-danger">{errors.name}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <InpComp value={values.email} id="email" onChange={handleChange} onBlur={handleBlur} name="email" type="email" label="Email" />
          {errors.email && touched.email ? (
            <div id="emailHel2p" className="text-danger">{errors.email}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <InpComp value={values.pass} id="pass" onChange={handleChange} onBlur={handleBlur} name="pass" type="password" label="Password" />
          {errors.pass && touched.pass ? (
            <div id="emailHel2p" className="text-danger">{errors.pass}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <InpComp value={values.cPass} id="cPass" onChange={handleChange} onBlur={handleBlur} name="cPass" type="password" label="Confirm Password" />
          {errors.cPass && touched.cPass ? (
            <div id="emailHel2p" className="text-danger">{errors.cPass}</div>
          ) : null}
        </div>
        <button className='btn btn-primary'  type='submit'>Signup</button>
        {/* <Button variant="contained" type="submit">Submit</Button> */}
      </form>
    </>
  )
}

export default Signup
