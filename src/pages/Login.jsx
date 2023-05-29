import {
  Form,
  Field,
  ErrorMessageEmail,
  ErrorMessagePassword,
} from './Login.styled';
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
  IconButton,
  Icon,
  InputLeftElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SlLogin } from 'react-icons/sl';
import { BiShow, BiHide } from 'react-icons/bi';
import { TfiLock } from 'react-icons/tfi';
import { AiOutlineMail } from 'react-icons/ai';
import { useAuth } from 'hooks';
import { PageLoader } from 'components/RefreshLoader/RefreshLoader';

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required('Required field!'),
  password: Yup.mixed().required('Required field!'),
});

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  // Відображення паролю
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={FormSchema}
          onSubmit={(values, actions) => {
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
                    <FormControl isRequired isInvalid={isErrorEmail} mb={3}>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <Input
                          {...field}
                          variant="flushed"
                          placeholder="Enter email"
                        />
                        <InputLeftElement pointerEvents="none">
                          <Icon as={AiOutlineMail} color="grey.800" />
                        </InputLeftElement>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <ErrorMessageEmail name="email" component="div" />
                <Field name="password">
                  {({ field }) => (
                    <FormControl isRequired isInvalid={isErrorPassword}>
                      <FormLabel>Password</FormLabel>
                      <InputGroup size="md">
                        <Input
                          {...field}
                          pr="4.5rem"
                          type={show ? 'text' : 'password'}
                          variant="flushed"
                          placeholder="Enter password"
                        />
                        <InputLeftElement pointerEvents="none">
                          <Icon as={TfiLock} color="grey.800" />
                        </InputLeftElement>
                        <InputRightElement width="4.5rem">
                          {show ? (
                            <IconButton
                              h="1.75rem"
                              size="lg"
                              variant="ghost"
                              icon={<BiShow />}
                              onClick={handleClick}
                            ></IconButton>
                          ) : (
                            <IconButton
                              h="1.75rem"
                              size="lg"
                              variant="ghost"
                              icon={<BiHide />}
                              onClick={handleClick}
                            ></IconButton>
                          )}
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <ErrorMessagePassword name="password" component="div" />
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
      )}
    </>
  );
};

export default Login;
