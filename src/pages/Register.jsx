import { Form, Label, Btn, Field, ErrorMessage } from './Register.styled';
import { register } from '../redux/auth/authOperations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  //   password: Yup.number().positive('Must be > 0!').required('Required field!'),
});

const Register = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(
          register({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        );
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Username
          <br />
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label>
          Email
          <br />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </Label>
        <Label>
          Password
          <br />
          <Field name="password" />
          <ErrorMessage name="password" component="div" />
        </Label>
        <Btn type="submit">Register</Btn>
      </Form>
    </Formik>
  );
};

export default Register;
