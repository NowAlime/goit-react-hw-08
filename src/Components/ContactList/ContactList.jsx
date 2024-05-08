import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";



const ContactList = ({ contacts, onDelete }) => {
    return (
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    );
  };
  
  
  export default ContactList;