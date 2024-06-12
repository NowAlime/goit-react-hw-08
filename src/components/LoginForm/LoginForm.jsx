import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import style from "./LoginForm.module.css";

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;
    try {
      await dispatch(logIn({ email, password }));
      showToast("Login successful!", "success");
      resetForm();
    } catch (error) {
      showToast("Login failed!", "error");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(5).required(),
      })}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <div className={style.container}>
          <label htmlFor={emailId}>Email</label>
          <Field
            className={style.input}
            type="email"
            name="email"
            id={emailId}
            placeholder="Enter your email..."
          />
          <ErrorMessage
            className={style.errorMessage}
            name="email"
            component="p"
          />
        </div>
        <div className={style.container}>
          <label htmlFor={passwordId}>Password</label>
          <Field
            className={style.input}
            type="password"
            name="password"
            id={passwordId}
            placeholder="Enter your password..."
          />
          <ErrorMessage
            className={style.errorMessage}
            name="password"
            component="p"
          />
        </div>
        <button className={style.buttonSub} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
