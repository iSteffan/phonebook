import {
  Form,
  Field,
  ErrorMessagePassword,
  ErrorMessageEmail,
  ErrorMessageName,
} from './Register.styled';
import { register } from '../redux/auth/authOperations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/authSlice';
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
} from '@chakra-ui/react'; // import { useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import { TfiLock } from 'react-icons/tfi';
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { SlPencil } from 'react-icons/sl';
import { useAuth } from 'hooks';
import { PageLoader } from 'components/RefreshLoader/RefreshLoader';

const FormSchema = Yup.object().shape({
  name: Yup.mixed().required('Required field!'),
  email: Yup.string().email().required('Required field!'),
  password: Yup.string().min(7).required('Required field!'),
});

const Register = () => {
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
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={FormSchema}
          onSubmit={(values, actions) => {
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
          {props => {
            const isErrorName = !props.values.name && props.touched.name;
            const isErrorEmail = !props.values.email && props.touched.email;
            const isErrorPassword =
              !props.values.password && props.touched.password;

            return (
              <Form>
                <Field name="name">
                  {({ field }) => (
                    <FormControl isRequired isInvalid={isErrorName} mb={3}>
                      <FormLabel>Name</FormLabel>
                      <InputGroup>
                        <Input
                          {...field}
                          variant="flushed"
                          placeholder="Enter name"
                        />
                        <InputLeftElement pointerEvents="none">
                          <Icon as={FiUser} color="grey.800" />
                        </InputLeftElement>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <ErrorMessageName name="name" component="div" />
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
                  leftIcon={<SlPencil />}
                  mt={4}
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Sign up
                </Button>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default Register;
