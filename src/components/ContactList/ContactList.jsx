import {
  List,
  ListItem,
  ContactName,
  ContactPhone,
} from './ContactList.styled';
import {
  Form,
  Field,
  ErrorMessageName,
  ErrorMessageNumber,
} from '../ContactForm/ContactForm.styled';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Icon,
  InputLeftElement,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FiUser } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/button';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrConfigure } from 'react-icons/gr';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
import { patchContact } from 'redux/contact/contactsOperations';
import { useDispatch } from 'react-redux';

export const ContactList = ({ contacts, onDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <ContactName>
              <FiUser />
              {contact.name}:
            </ContactName>
            <ContactPhone>
              <BsTelephone />
              {contact.number}
            </ContactPhone>
            <ButtonGroup size="lg" isAttached variant="solid">
              <IconButton
                colorScheme="blue"
                aria-label="change contact"
                icon={<GrConfigure color="white" />}
                onClick={onOpen}
              ></IconButton>
              <IconButton
                colorScheme="gray"
                aria-label="delete contact"
                icon={<AiOutlineDelete />}
                onClick={() => onDelete(contact.id)}
              />
            </ButtonGroup>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Редагування контакту</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Formik
                    initialValues={{
                      name: contact.name,
                      number: contact.number,
                    }}
                    // validationSchema={FormSchema}
                    onSubmit={(values, actions) => {
                      // onSave({ ...values, id: nanoid() });
                      actions.resetForm();
                    }}
                  >
                    {props => {
                      const isErrorName =
                        !props.values.name && props.touched.name;
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
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
