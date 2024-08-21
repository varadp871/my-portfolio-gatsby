import * as Yup from 'yup';

export const checkContactSchema = Yup.object({
    name:Yup.string().min(3).max(25).required("Please enter your Name"),
    email:Yup.string().email().required("Please enter your Email ID"),
    subject:Yup.string().min(2).required("Please enter the Subject of your query"),
    query:Yup.string().min(5).required("Details required please!")

});