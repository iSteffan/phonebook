import {
  Form,
  Field,
  ErrorMessageName,
  ErrorMessageNumber,
} from './ContactModalWindow.styled';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Icon,
  InputLeftElement,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { Button } from '@chakra-ui/button';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Formik } from 'formik';
import { editContact } from 'redux/contact/contactsOperations';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.string().required('Required field!'),
});

export const ContactModalWindow = ({ contact, isOpen, onClose }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      closeOnOverlayClick={false}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent w={{ base: '320px', md: '400px' }}>
        <ModalHeader p={'10px 15px 0px 15px'}>Edit Contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={'8px 15px 8px 15px'}>
          <Formik
            initialValues={{
              name: contact.name,
              number: contact.number,
            }}
            validationSchema={FormSchema}
            onSubmit={(values, actions) => {
              dispatch(
                editContact({
                  id: contact._id,
                  name: values.name,
                  number: values.number,
                })
              );
              actions.resetForm();
            }}
          >
            {props => {
              const isErrorName = !props.values.name && props.touched.name;
              const isErrorNumber =
                !props.values.number && props.touched.number;

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
                        <InputGroup>
                          <Input
                            {...field}
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
                    Change contact
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

ContactModalWindow.propTypes = {
  contact: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
