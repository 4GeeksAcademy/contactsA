import { Home } from "./Home";
import { AddNewContact } from "./AddNewContact";
import { useState } from "react";

export default function PassProps() {
    const [contacts, setContacts] = useState([]);
  
    // Función para agregar un nuevo contacto
    const addContact = (newContact) => {
      setContacts([...contacts, newContact]); // Agrega el nuevo contacto al estado
    };
  
    return (
      <div>
        <h1>Gestor de Contactos</h1>
        <AddNewContact onAddContact={addContact} />
        <Home contacts={contacts} />
      </div>
    );
  }