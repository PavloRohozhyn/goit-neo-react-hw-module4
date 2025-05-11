import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import css from "./SearchBar.module.css";

const ContactForm = ({ fn, isDisabled }) => {
  const initialValues = {
    query: "",
  };

  const ValidationSchema = object().shape({
    query: string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={fn}
      validationSchema={ValidationSchema}
      validateOnMount={true}
    >
      <Form>
        <div className={css.contactUname}>
          <label className={css.contactLabel}>
            Name
            <Field
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="query"
            />
            <ErrorMessage name="uname" component="span" />
          </label>
        </div>
        <button type="submit" disabled={isDisabled}>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
