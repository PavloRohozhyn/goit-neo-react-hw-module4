import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ fn, data }) => {
  const { id, name, number } = data;
  return (
    <div className={css.container}>
      <div className={css.right}>
        <div>
          <FaUser />
          &#160;
          <span>{name}</span>
        </div>
        <div>
          <FaPhone />
          &#160;
          <span>{number}</span>
        </div>
      </div>
      <div className={css.left}>
        <button onClick={() => fn(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
