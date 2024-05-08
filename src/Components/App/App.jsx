import { useState, useEffect } from "react"
import "../App/App.module.css"
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import data from '../contacts.json'


function App () {
const [filter, setFilter] = useState("");
const [contacts, setContacts] = useState(data);
const filterContacts = contacts.filter((contact) =>
contact.name.toLowerCase().includes(filter.toLowerCase())
);

const addContact = (newContact) => {
    setContacts((prevuesContacts) => {
      const updatedContacts = [...prevuesContacts, newContact];
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };
  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);
 
  const deleteContact = (contactId) => {
    setContacts((prevuesContacts) => {
      const updatedContacts = prevuesContacts.filter(
        (contact) => contact.id !== contactId
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

return (
<div>
  <h1>Phonebook</h1>
  <ContactForm onContact = {addContact} />
  <SearchBox value={filter} onFilter={setFilter} />
  <ContactList contacts={filterContacts} onDelete={deleteContact} /> 
</div>
)
}

export default App;