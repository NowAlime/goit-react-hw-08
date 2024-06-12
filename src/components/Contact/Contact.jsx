import { FaPhone, FaUser, FaPencil } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { changeContact } from "../../redux/contacts/operations";
import { Field, Form, Formik } from "formik";
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

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  
  const handleDelete = () => {
    dispatch(openModal(id));
  };


  const handleChange = (values) => {
    const { name, number } = values;
    dispatch(changeContact({ id, name, number }))
      .unwrap()
      .then(() => showToast("Edit success!", "success"))
      .catch(() => showToast("Edit failed!", "error"));
  };

  return (
    <Formik initialValues={{ name, number }} onSubmit={handleChange}>
      <Form className={style.listItemContainer}>
        <ContactField icon={FaUser} name="name" className={style.contactName} />
        <ContactField icon={FaPhone} name="number" className={style.contactName} />
        <ActionButtons onDelete={handleDelete} />
      </Form>
    </Formik>
  );
}


const ContactField = ({ icon: Icon, name, className }) => (
  <label className={style.listItemPice}>
    <Icon /> <Field className={className} name={name} />
  </label>
);


const ActionButtons = ({ onDelete }) => (
  <div className={style.buttonContainer}>
    <button className={style.buttonChange} type="submit">
      <FaPencil />
      Update
    </button>
    <button className={style.deleteButton} type="button" onClick={onDelete}>
      <MdDeleteForever size={20} /> Delete
    </button>
  </div>
);
