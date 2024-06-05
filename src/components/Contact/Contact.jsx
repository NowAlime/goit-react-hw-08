import { HiUser, HiPhone } from "react-icons/hi";
import style from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/ContactsApi";

function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={style.listItemContainer}>
        <span className={style.listItemPice}>
          <HiUser /> <p className={style.contactName}>{name}</p>
        </span>
        <span className={style.listItemPice}>
          <HiPhone />
          <p>{number}</p>
        </span>
      </div>
      <button className={style.deleteButton} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}

export default Contact;
