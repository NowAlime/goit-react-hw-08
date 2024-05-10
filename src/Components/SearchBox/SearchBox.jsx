import { useId } from "react";
import style from "../SearchBox/SearchBox.module.css";

function SearchBox({ value, onFilter }) {
  const searchInputId = useId();

  return (
    <div className={style.filter}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        className={style.filterInput}
        id={searchInputId}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBox;