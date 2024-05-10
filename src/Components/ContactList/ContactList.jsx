import Contact from "../Contact/Contact";
import style from "../ContactList/ContactList.module.css";



const ContactList = ({ contacts, onDelete }) => {
    return (
      <>
      <ul className={style.list}>
      {contacts.map((contact) => {
        return (
          <li className={style.listItem} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul></>
      
    );
  };
  
  
  export default ContactList;