import { useId } from "react";
import css from "../SearchBox/SearchBox.module.css";

function SearchBox({ value, onFilter }) {
  const finedId = useId();
  return (
    <div>
      <label htmlFor={finedId}>Find contacts by name</label>
      <input
        id={finedId}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;