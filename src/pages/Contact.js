import React, { Component } from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import "../styles/myCss.css";
import { checkContactSchema } from "../schemas";
const initialValues = {
  name: "",
  email: "",
  subject: "",
  query: "",
};

function Contact() {
  const {values, errors, handleBlur, handleSubmit, handleChange} = useFormik({
    initialValues: initialValues,
    validationSchema: checkContactSchema,
    onSubmit: (values) => {
      console.log("values :", values);
    },
  });

  return (
    <>
      <div>
        <Navbar />
        <h1 className="text_color_light headingStyles contactText">
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
            </label>
            <label className="relative block label">
              <span className="sr-only">Query</span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Query"
                type="text"
                name="query"
                value={values.query}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <button className="mr-4 py-2 px-4 rounded-full text-violet-700 border-0 block w-full text-sm font-semibold bg-violet-50 text-slate-500 hover:bg-violet-100">
              Reach Out!
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
