// import { Form, Label, Btn, Field, ErrorMessage } from './Register.styled';
import { Form, Field, ErrorMessage } from './Register.styled';
import { logIn } from '../redux/auth/authOperations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SlLogin } from 'react-icons/sl';

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required('Required field!'),
  password: Yup.mixed().required('Required field!'),
});

const Login = () => {
  const dispatch = useDispatch();

  // Відображення паролю
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
      {props => {
        const isErrorEmail = !props.values.email && props.touched.email;
        const isErrorPassword =
          !props.values.password && props.touched.password;

        return (
          <Form>
            <Field name="email">
              {({ field }) => (
                <FormControl isRequired isInvalid={isErrorEmail}>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder="Enter email" />
                  {/* {!isError ? (
                    <FormHelperText>
                      We'll never share your email.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )} */}
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="email" component="div" />
            <Field name="password">
              {({ field }) => (
                <FormControl isRequired isInvalid={isErrorPassword}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      {...field}
                      pr="4.5rem"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="password" component="div" />
            <Button
              leftIcon={<SlLogin />}
              mt={4}
              colorScheme="blue"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Log in
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
//     <Formik
//       initialValues={{
//         email: '',
//         password: '',
//       }}
//       validationSchema={FormSchema}
//       onSubmit={(values, actions) => {
//         console.log(values);
//         dispatch(
//           logIn({
//             email: values.email,
//             password: values.password,
//           })
//         );
//         actions.resetForm();
//       }}
//     >
//       <Form>
//         <Label>
//           Email
//           <br />
//           <Field type="email" name="email" />
//           <ErrorMessage name="email" component="div" />
//         </Label>
//         <Label>
//           Password
//           <br />
//           <Field name="password" />
//           <ErrorMessage name="password" component="div" />
//         </Label>
//         <Btn type="submit">Log in</Btn>
//       </Form>
//     </Formik>;
