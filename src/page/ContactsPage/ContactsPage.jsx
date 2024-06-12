import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { selectLoading } from "../../redux/contacts/selectors";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import SearchBox from "../../components/SearchBox/SearchBox";
import { toast } from "react-toastify";
import style from "./ContactsPage.module.css";

const showToast = (message, type) => {
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: type === "success" ? "light" : "colored",
    type: type,
  });
};

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        showToast("Contacts loaded successfully!", "success");
      })
      .catch(() => {
        showToast("Oops, something went wrong!", "error");
      });
  }, [dispatch]);

  return (
    <div className={style.container}>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && <Loading />}</div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
