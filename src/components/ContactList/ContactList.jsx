import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.list}>
      {visibleContacts.map((contact) => (
        <li className={style.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
