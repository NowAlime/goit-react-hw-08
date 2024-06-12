import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import style from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const showToast = (message, type) => {
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: type === "success" ? "light" : "colored",
    type: type,
  });
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const formNameId = useId();
  const formNumberId = useId();
  const contactsSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(9, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        showToast("Contact add successful!", "success");
      })
      .catch(() => {
        showToast("Contact add failed!", "error");
      });
    actions.resetForm();
  };

  return (
    <Formik
      className={style.contactForm}
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
      initialValues={{ name: "", number: "" }}
    >
      <Form className={style.contactForm}>
        <div className={style.inputContainer}>
          <label htmlFor={formNameId}>Name</label>
          <Field
            className={style.nameInput}
            id={formNameId}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={formNumberId}>Number</label>
          <Field
            className={style.nameInput}
            id={formNumberId}
            type="tel"
            name="number"
            placeholder="Enter your phone number"
          />
          <ErrorMessage className={style.error} name="number" component="span" />
        </div>
        <button className={style.buttonSubmit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
