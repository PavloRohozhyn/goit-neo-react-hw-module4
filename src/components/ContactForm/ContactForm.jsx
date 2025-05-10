import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ fn }) => {
  const initialValues = {
    uname: "",
    unumber: "",
  };

  const ValidationSchema = object().shape({
    uname: string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    unumber: string()
      .min(3, "Too short")
      .max(50, "Too long")
      .matches("^[0-9-]+$", "wrong format, it should be 000-00-00")
      .required("Required"),
  });

  return (
    <div className={css.contactFormWrapper}>
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
              <Field type="text" name="uname" />
              <ErrorMessage name="uname" component="span" />
            </label>
          </div>
          <div className={css.contactUnumber}>
            <label className={css.contactLabel}>
              Number
              <Field type="text" name="unumber" />
              <ErrorMessage name="unumber" component="span" />
            </label>
          </div>
          <div className={css.contactBtn}>
            <button type="submit">Add Сontact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
