import { useDispatch, useSelector } from 'react-redux'; // для доступу до стору
import { useEffect } from 'react';
import { GrContactInfo } from 'react-icons/gr';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations'; // операції
import { Button, Item, List, Text, Spinner } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts); // витягуємо зі стору
  const isLoading = useSelector(selectIsLoading); // витягуємо зі стору
  const error = useSelector(selectError); // витягуємо зі стору
  const dispatch = useDispatch(); // для діспатча екшенів

  useEffect(() => {
    dispatch(fetchContacts()); // діспатчимо екшен
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id)); // діспатчимо екшен
  };

  return (
    <>
      {isLoading && <Spinner />}

      {/* якщо немає контактів і не йде загрузка і не виникла помилка */}
      {!filteredContacts?.length && !error && !isLoading && (
        <Text>No contacts found.</Text>
      )}

      {/* якщо виникла помилка */}
      {error && <Text>{error}</Text>}
      <List>

        {/* Перебираємо масив контактів і рендеримо їх */}
        {filteredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <GrContactInfo size={20} />
            <Text>
              {name}: {phone}
            </Text>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};

// Діма Берестень
