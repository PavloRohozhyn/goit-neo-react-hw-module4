import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ data, fn }) => {
  return (
    <ul className={css.contactlist}>
      {data.map((el) => (
        <li key={el.id} className={css.contactListItem}>
          <Contact fn={fn} data={el} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
