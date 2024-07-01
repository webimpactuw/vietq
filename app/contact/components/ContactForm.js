"use client";

import {
  FormField,
  FormSelect,
  FormTextArea,
  FormErrorMessage,
  FormLabel,
} from "@/components/global/FormComponents";
import emailjs from "@emailjs/browser";

import { useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  // create a state that tracks whether a form is susbmitted
  const [submit, setSubmit] = useState(false);
  // when sstate is true, hide form and shsow ssuccesssful thing

  return (
    <Formik
      id="contact-form"
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
        emailjs
          .send(
            "default_service",
            "template_kupbf4i",
            values,
            process.env.NEXT_PUBLIC_EMAILJS_API_PUBLIC_KEY
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );

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
                  Choose a subject
                </option>
                <option value="Volunteering">Volunteering</option>
                <option value="Events">Events</option>
                <option value="Community">Community</option>
                <option value="Leadership">Leadership</option>
                <option value="Other">Other</option>
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
            } hover:bg-gray-700 mt-4 hover:border-gray-600 bg-gray-900 border-gray-800 text-white transition-colors cursor-pointer border text-sm rounded-full px-4 pt-1.5 pb-2 tracking-tight font-medium`}
          >
            Submit form
          </button>
        </form>
      )}
    </Formik>
  );
}
