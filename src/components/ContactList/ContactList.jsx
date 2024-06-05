import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '..//../redux/contactsOps';
import { selectContacts, selectNameFilter } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
