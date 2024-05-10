import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import style from '../ContactForm/ContactForm.module.css'

function ContactForm ({onContact}){
  const nameId = useId();
  const numberId = useId();

  const contactsSchema =  Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(9, "Too Short!")
      .max(16, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    onContact({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik initialValues={{name:"",  number:""}} onSubmit={handleSubmit} validationSchema={contactsSchema}>
      <Form className={style.form}>
        <div className={style.field}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId}></Field>
          <ErrorMessage className={style.error} name ="name" component="span"></ErrorMessage>
        </div>
        <div className={style.field}>
          <label htmlFor={numberId}>Number</label>
          <Field type="tel" name="number" id={numberId}></Field>
          <ErrorMessage className={style.error} name ="number" component="span"></ErrorMessage>
        </div>
        <button className={style.buttonSubmit} type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;