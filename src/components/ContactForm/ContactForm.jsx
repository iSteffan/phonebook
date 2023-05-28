import {
  Form,
  Field,
  ErrorMessageName,
  ErrorMessageNumber,
} from './ContactForm.styled';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  Input,
  InputGroup,
  Button,
  FormControl,
  FormLabel,
  Icon,
  InputLeftElement,
} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.string().required('Required field!'),
});

export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      {props => {
        const isErrorName = !props.values.name && props.touched.name;
        const isErrorNumber = !props.values.number && props.touched.number;

        return (
          <Form>
            <Field name="name">
              {({ field }) => (
                <FormControl isInvalid={isErrorName} mb={3}>
                  <FormLabel>Name</FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      variant="filled"
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
            <Field name="number">
              {({ field }) => (
                <FormControl isInvalid={isErrorNumber}>
                  <FormLabel>Number</FormLabel>
                  <InputGroup size="md">
                    <Input
                      {...field}
                      pr="4.5rem"
                      variant="filled"
                      placeholder="Enter number"
                      type="tel"
                    />
                    <InputLeftElement pointerEvents="none">
                      <Icon as={BsTelephone} color="grey.800" />
                    </InputLeftElement>
                  </InputGroup>
                </FormControl>
              )}
            </Field>
            <ErrorMessageNumber name="number" component="div" />
            <Button
              leftIcon={<AiOutlineUserAdd />}
              mt={4}
              colorScheme="blue"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Add contact
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
