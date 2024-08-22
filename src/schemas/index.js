import * as Yup from 'yup';

export const checkContactSchema = Yup.object({
    name:Yup.string().min(3, 'Name must contain minimum 3 characters').max(25).required("Please enter your Name"),
    email:Yup.string().email('Please enter a valid Email ID').required("Please enter your Email ID"),
    subject:Yup.string().min(2, 'Subject less than 2 characters? Lets try again :)').required("Please enter the Subject of your query"),
    query:Yup.string().min(5, 'Such a short query? Go on write the story!').required("Details required please!")

});