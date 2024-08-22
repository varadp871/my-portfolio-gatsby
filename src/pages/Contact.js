import React, { Component } from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import "../styles/ContactForm.css";
import { checkContactSchema } from "../schemas";
const initialValues = {
  name: "",
  email: "",
  subject: "",
  query: "",
};

function Contact() {
  const {values, isSubmitting, errors, handleBlur, touched, handleSubmit, handleChange} = useFormik({
    initialValues: initialValues,
    validationSchema: checkContactSchema,
    onSubmit: (values, action) => {
      console.log("values :", values);
      action.resetForm();
    },
  });

  return (
    <>
      <div className="darkBackground">
        <Navbar />
        <div className="pageCenter"> 
        <h1 className="headingStyles contactText">
          Contact Me!
        </h1>
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <label className="relative block label">
              <span className="sr-only">Name</span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              { errors.name && touched.name ? <p className="formError"> { errors.name } </p> : null }
            </label>
            <label className="relative block label">
              <span className="sr-only">Email</span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Email ID"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              { errors.email && touched.email ? <p className="formError"> { errors.email } </p> : null }
            </label>
            <label className="relative block label">
              <span className="sr-only">Subject</span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Subject"
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              { errors.subject && touched.subject ? <p className="formError"> { errors.subject } </p> : null }
            </label>
            <label className="relative block label">
              <span className="sr-only">Query</span>
              <textarea
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Query"
                type="text"
                name="query"
                id="query"
                value={values.query}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              { errors.query && touched.query ? <p className="formError"> { errors.query } </p> : null }
            </label>
            <button type="submit" id="formBtn" className="mr-4 py-2 px-4 rounded-full text-violet-700 border-0 block w-full text-sm font-semibold bg-violet-50 text-slate-500 hover:bg-violet-100" disabled={isSubmitting}>
              Reach Out!
            </button>
          </form>
             
        </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
