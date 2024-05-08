
import css from "../Contact/Contact.module.css";


function Contact({ contact: { id, name, number }, onDelete }) {
    return (
      <>
        <div>
          <span>
            <p>{name}</p>
          </span>
          <span>
          <p>{number}</p>
          </span>
        </div>
        <button
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </>
    );
  }

export default Contact;