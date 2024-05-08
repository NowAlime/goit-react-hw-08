import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from '../ContactForm/Contact.module.css'


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
          name: values.name,
          number: values.number,
        });
        actions.resetForm();
      };
return (
<Formik initialValues={{name:"",  number:""}} onSubmit={handleSubmit} contactsSchema={contactsSchema}>
    <Form>
    <div>
        <label htmlFor="nameId">Name</label>
        <Field type="text" name="name" id="nameId"></Field>
        <ErrorMessage name ="name" component="span"></ErrorMessage>
    </div>
    <div>
        <label htmlFor="numberId">Number</label>
        <Field type="tel" name="number" id="numberId"></Field>
        <ErrorMessage  name ="number" component="span"></ErrorMessage>
    </div>
        <button type="submit">Submit</button>
    </Form>
</Formik>
);
}

export default ContactForm ;