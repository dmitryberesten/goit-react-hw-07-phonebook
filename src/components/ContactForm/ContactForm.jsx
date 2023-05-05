import { useDispatch, useSelector } from 'react-redux'; // отримуємо доступ до стору
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { nanoid } from 'nanoid'; // генерує унікальні id
import { toast } from 'react-toastify'; // пакет для повідомлень
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch(); // для діспатча екшенів
  const contacts = useSelector(selectContacts); // отримуємо доступ до стору

  const handleSubmit = event => {
    event.preventDefault(); // відміняємо стандартну поведінку браузера

    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    // Перевірка на дублікати
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    // Якщо контакт вже існує, то виводимо повідомлення
    if (isExist) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }

    dispatch(addContact(contact)); // діспатчимо екшен
    event.currentTarget.reset(); // очищаємо форму
  };

  return (
    <Form onSubmit={handleSubmit}> {/* відправляємо дані з форми */}
      <Label htmlFor={nanoid()}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nanoid()}
          required
        />
      </Label>
      <Label htmlFor={nanoid()}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={nanoid()}
          required
        />
      </Label>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

// Діма Берестень
