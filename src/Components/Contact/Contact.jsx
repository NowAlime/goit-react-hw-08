
import style from "../Contact/Contact.module.css";


function Contact({ contact: { id, name, number }, onDelete }) {
    return (
      <>
        <div className={style.listContainer}>
          <span className={style.listInform}>
            <p className={style.contactName}>{name}</p>
          </span>
          <span className={style.listItem}>
          <p>{number}</p>
          </span>
        </div>
        <button   className={style.deleteButton}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </>
    );
  }

export default Contact;