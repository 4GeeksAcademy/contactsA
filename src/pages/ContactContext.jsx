import { createContext, useState, useContext } from "react";

const ContactContext = createContext();

export const useContacts = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Juan Pérez",
      number: "123-456-7890",
      email: "juan@example.com",
      address: "Calle Falsa 123",
      imagen: "https://i.pinimg.com/736x/8f/52/79/8f5279cb77fc929deee15c144595faf2.jpg"
    },
  ]);

  const addContact = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: Date.now(),
      imagen: "https://i.pinimg.com/736x/8f/52/79/8f5279cb77fc929deee15c144595faf2.jpg"
    };
    setContacts(prev => [...prev, contactWithId]);
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};
