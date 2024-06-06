import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectContacts, selectFilteredContacts, selectNameFilter } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className={style.list}>
        {visibleContacts.map((contact) => (
          <li className={style.listItem} key={contact.id}>
            <Contact contact={contact} filter={filter} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
