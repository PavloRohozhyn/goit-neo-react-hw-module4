import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

import css from "./SearchBar.module.css";

// valiadtion empty error
const emptyError = () => {
  toast.error("Please type something");
};

const ContactForm = ({ onSubmit }) => {
  // const fn = (values, actions) => {
  const fn = (values) => {
    if (!values.query) {
      emptyError();
      return;
    }
    onSubmit(values.query);
    // actions.resetForm();
  };

  return (
    <div className={css.searchContainer}>
      <Toaster position="top-left" />
      <Formik initialValues={{ query: "" }} onSubmit={fn}>
        <Form className={css.searchBox}>
          <div>
            <Field
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="query"
            />
          </div>
          <div>
            <button type="submit">
              <FaSearch />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
