import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/selectors";
import { fetchContacts } from "../../redux/ContactsApi";
import style from "../App/App.module.css";
import Loading from '../Loading/Loading'; 
import Error from '../Error/Error'; 

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.mainContainer}>
      <h1 className={style.headerText}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loading />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}

export default App;
