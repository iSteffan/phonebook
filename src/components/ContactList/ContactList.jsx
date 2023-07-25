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

export const ContactList = ({ contacts, onDelete }) => {
  const [isOpen, setIsOpen] = useState({});

  const handleOpen = contactId => {
    setIsOpen(prevIsOpen => ({ ...prevIsOpen, [contactId]: true }));
  };

  const handleClose = contactId => {
    setIsOpen(prevIsOpen => ({ ...prevIsOpen, [contactId]: false }));
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
                onClick={() => onDelete(contact._id)}
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
