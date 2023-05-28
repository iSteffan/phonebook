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

export const ContactList = ({ contacts, onDelete }) => {
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
              ></IconButton>
              <IconButton
                colorScheme="gray"
                aria-label="delete contact"
                icon={<AiOutlineDelete />}
                onClick={() => onDelete(contact.id)}
              />
            </ButtonGroup>
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
