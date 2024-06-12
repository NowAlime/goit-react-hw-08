import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik  
      initialValues={{ name: '', email: '', password: '' }} 
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Field name="name" type="text" placeholder="Name" />
        <Field name="email" type="email" placeholder="Email" />
        <Field name="password" type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

