import * as Yup from 'yup';

const singupSchema = Yup.object({

    name:Yup.string().min(3).max(30).required("Name must be at least 3 characters"),
    email: Yup.string().email().required("Please enter a valid email"),
    pass: Yup.string().min(8).max(20).required("Password must be at least 8 characters"),
    cPass: Yup.string().required("Password must be  match").oneOf([Yup.ref("pass"),null],"Password must match"),
});
export  {singupSchema};