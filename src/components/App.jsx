import { ToastContainer } from 'react-toastify'; // вспливаючі повідомлення
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainHeader, SecondaryHeader, Section } from './App.styled';

export const App = () => {
  return (
    <Section>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <SecondaryHeader>Contacts</SecondaryHeader>
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" /> {/* це для вспливаючих повідомлень */}
    </Section>
  );
};

// Діма Берестень
