import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/contact/filterSlice';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contact/contactsOperations';
import { MainTitle, Title, TextError } from './Contacts.styled';
import { Loader } from 'components/Loader/Loader';
import { useContact } from 'hooks';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  const { contacts } = useContact();
  const { isLoading } = useContact();
  const { error } = useContact();

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInputChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const filteredArr = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  console.log(contacts);

  const doDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const doAddContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      toast.warning(`${newContact.name} is already in contacts`, {
        draggable: false,
      });
    } else {
      dispatch(addContact(newContact));
    }
  };
  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSave={doAddContact} />
      {contacts.length !== 0 && <Title>Contacts</Title>}
      {contacts.length > 0 && (
        <Filter filter={filter} handleInputChange={handleInputChange}></Filter>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <ContactList
          contacts={filteredArr()}
          onDelete={doDeleteContact}
        ></ContactList>
      )}
      {error && <TextError>Oops, something wrong is going on...</TextError>}
    </div>
  );
};

export default Contacts;
