import {
  FormField,
  FormSelect,
  FormTextArea,
  FormErrorMessage,
  FormLabel,
} from "@/components/global/FormComponents";
import emailjs from '@emailjs/browser';

import { useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

export default function ContactForm() {

// create a state that tracks whether a form is susbmitted
  const [submit, setSubmit] = useState(false);
// when sstate is true, hide form and shsow ssuccesssful thing

  return (
      <Formik id="contact-form"
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("This field is required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("This field is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("This field is required"),
          subject: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("This field is required"),
          message: Yup.string()
            .max(500, "Must be 500 characters or less")
            .required("This field is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          emailjs.send('default_service', 'template_kupbf4i', values, process.env.NEXT_PUBLIC_EMAILJS_API_PUBLIC_KEY)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });

            setSubmitting(true);
            // set that sstate to true
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="md:grid grid-cols-2 gap-4 md:space-y-0 space-y-8">
              <div className="space-y-2">
                <FormLabel htmlFor="firstName">First name</FormLabel>
                <FormField
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="John"
                />
                <FormErrorMessage name="firstName" />
              </div>
              <div className="space-y-2">
                <FormLabel htmlFor="lastName">Last name</FormLabel>
                <FormField
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Doe"
                />
                <FormErrorMessage name="lastName" />
              </div>
              <div className="space-y-2">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormField
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                />
                <FormErrorMessage name="email" />
              </div>
              <div className="space-y-2">
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormSelect id="subject" name="subject">
                  <option value="" disabled selected>
                    Choose a country
                  </option>
                  <option value="US">Volunteering</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </FormSelect>
                <FormErrorMessage name="subject" />
              </div>
              <div className="col-span-2 space-y-2">
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextArea
                  id="message"
                  name="message"
                  placeholder="Enter a message!"
                />
                <FormErrorMessage name="message" />
              </div>
            </div>
            <button
              type="submit"
              className={`${
                formik.values.firstName == "" ||
                formik.values.lastName == "" ||
                formik.values.email == "" ||
                formik.values.subject == "" ||
                formik.values.message == ""
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              } inline-flex mt-4 float-left text-white bg-blue-600 border-blue-700 focus:outline-blue-800 hover:bg-blue-700 uppercase whitespace-nowrap shadow-xl border text-sm rounded-full py-2.5 px-5 font-semibold tracking-widest transition-colors`}
            >
              Submit form
            </button>
          </form>
        )}
      </Formik>
  );
}
