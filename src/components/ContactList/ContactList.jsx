import {
  List,
  ListItem,
  ContactName,
  ContactPhone,
} from './ContactList.styled';
import PropTypes from 'prop-types';
import { FiUser } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { ButtonGroup, IconButton } from '@chakra-ui/button';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrConfigure } from 'react-icons/gr';
import { ContactModalWindow } from 'components/ContactModalWindow/ContactModalWindow';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contact/contactsOperations';
export const ContactList = ({ contacts, onDelete }) => {
  const [isOpen, setIsOpen] = useState({});

  const handleOpen = contactId => {
    setIsOpen(prevIsOpen => ({ ...prevIsOpen, [contactId]: true }));
  };

  const handleClose = contactId => {
    setIsOpen(prevIsOpen => ({ ...prevIsOpen, [contactId]: false }));
  };
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    onDelete(contactId);
    dispatch(fetchContacts());
  };

  return (
    <List>
      {contacts.map(contact => {
        const isModalOpen = isOpen[contact._id] || false;

        return (
          <ListItem key={contact._id}>
            <ContactName>
              <FiUser />
              {contact.name}:
            </ContactName>
            <ContactPhone>
              <BsTelephone />
              {contact.number}
            </ContactPhone>
            <ButtonGroup
              size={{ base: 'sm', md: 'lg' }}
              isAttached
              variant="solid"
            >
              <IconButton
                colorScheme="blue"
                aria-label="change contact"
                icon={<GrConfigure color="white" />}
                onClick={() => handleOpen(contact._id)}
              />
              <IconButton
                colorScheme="gray"
                aria-label="delete contact"
                icon={<AiOutlineDelete />}
                onClick={() => handleDelete(contact._id)}
              />
            </ButtonGroup>
            <ContactModalWindow
              contact={contact}
              isOpen={isModalOpen}
              onClose={() => handleClose(contact._id)}
            />
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
