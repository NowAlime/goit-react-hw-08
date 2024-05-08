import { useState, useEffect } from "react";
import "../App/App.module.css";
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'


function App () {

return (
<div>
  <h1>Phonebook</h1>
  <ContactForm onContact ={addContact} />
  <SearchBox />
  <ContactList />
</div>
)
}