import { Form, Label, Btn, Field, ErrorMessage } from './Register.styled';
import { logIn } from '../redux/auth/authOperations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

const FormSchema = Yup.object().shape({
  //   name: Yup.string().required('Required field!'),
  //   password: Yup.number().positive('Must be > 0!').required('Required field!'),
});

const Login = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(
          logIn({
            email: values.email,
            password: values.password,
          })
        );
        actions.resetForm();
      }}
    >
      <Form>
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
        <Btn type="submit">Log in</Btn>
      </Form>
    </Formik>
  );
};

export default Login;
