import { useState, useEffect } from "react"
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import initialContacts from '../contacts.json'
import "./App.module.css"


function App () {

const [contacts, setContacts] = useState(initialContacts);
const [filter, setFilter] = useState("");

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

  
const filterContacts = contacts.filter((contact) =>
contact.name.toLowerCase().includes(filter.toLowerCase())
);

return (
<div className="mainContainer">
  <h1 className="headerContent">Phonebook</h1>
  <ContactForm onContact = {addContact} />
  <SearchBox value={filter} onFilter={setFilter} />
  <ContactList  contacts={filterContacts} onDelete={deleteContact} /> 
</div>
)
}

export default App;