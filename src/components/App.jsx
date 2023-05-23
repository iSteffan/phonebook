import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contact/contactSlice';
import { setFilter, getFilter } from 'redux/contact/filterSlice';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contact/contactsOperations';
import { Wrapper, MainTitle, Title, TextError } from './App.styled';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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

  const doDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const doAddContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSave={doAddContact} />
      <Title>Contacts</Title>
      <Filter filter={filter} handleInputChange={handleInputChange}></Filter>
      {isLoading && <Loader />}
      {error && <TextError>Oops, something wrong is going on...</TextError>}
      <ContactList
        contacts={filteredArr()}
        onDelete={doDeleteContact}
      ></ContactList>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Wrapper>
  );
};
