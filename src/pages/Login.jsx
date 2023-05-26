// import { Form, Label, Btn, Field, ErrorMessage } from './Register.styled';
import { Form, Field } from './Register.styled';
import { logIn } from '../redux/auth/authOperations';
import { Formik } from 'formik';
// import * as Yup from 'yup';
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

// const FormSchema = Yup.object().shape({
//     name: Yup.string().required('Required field!'),
//     password: Yup.number().positive('Must be > 0!').required('Required field!'),
// });

const Login = () => {
  const dispatch = useDispatch();

  // Відображення паролю
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [input, setInput] = useState('');

  const handleInputChange = e => setInput(e.target.value);

  // let isError
  // if (handleInputChange === "") {
  //   isError
  // }
  // const isError = input === '';
  // const [error, setError] = useState(false);

  // const [input, setInput] = useState('');

  // const handleInputChange = e => setInput(e.target.value);

  const isError = input === '';

  // function validateName(value) {
  //   let error;
  //   if (!value) {
  //     error = 'Name is required';
  //     return error;
  //   }
  // }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
      {props => (
        <Form>
          <Field name="email">
            {({ field }) => (
              <FormControl isRequired isInvalid={isError}>
                <FormLabel>Email</FormLabel>
                <Input
                  {...field}
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                />
                {!isError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field }) => (
              <FormControl isRequired>
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
      )}
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
