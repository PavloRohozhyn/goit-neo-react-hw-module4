import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ qvalue, qfn }) => {
  const id = useId();
  return (
    <div className={css.searchBlockWrapper}>
      <div>
        <label className={css.searchBoxLabel} htmlFor={id}>
          Find contacts by name
        </label>
        <input
          id={id}
          className={css.searchBoxInput}
          type="text"
          name="sbox"
          value={qvalue}
          onChange={qfn}
        />
      </div>
    </div>
  );
};

export default SearchBox;
