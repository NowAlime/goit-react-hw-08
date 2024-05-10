import { useState } from "react";
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import initialContacts from '../contacts.json';
import style from './App.module.css';

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(initialContacts);
  

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

 
  const deleteContact = (contactId) => {
    setContacts((prevuesContacts) => {
      const updatedContacts = prevuesContacts.filter(
        (contact) => contact.id !== contactId
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={style.mainContainer}>
      <h1 className={style.headerContent}>Phonebook</h1>
      <ContactForm onContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList  contacts={filterContacts} onDelete={deleteContact} /> 
    </div>
  );
}

export default App;