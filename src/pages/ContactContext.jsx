import { createContext, useState, useContext, useEffect } from "react";

const API_BASE = "https://playground.4geeks.com/contact";

const ContactContext = createContext();

export const useContacts = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

// method: GET para leer
useEffect(() => {
  async function fetchContacts() {
    try {
      const res = await fetch(`${API_BASE}/agendas/ayakta/contacts`);
      if (!res.ok) throw new Error("Error al cargar contactos");

      const data = await res.json();

      const mapped = data.contacts.map(c => ({
        id: c.id,
        name: c.name,
        email: c.email,
        phone: c.phone,
        address: c.address,
        imagen: c.imagen || "https://i.pinimg.com/736x/8f/52/79/8f5279cb77fc929deee15c144595faf2.jpg"
      }));

      setContacts(mapped);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  fetchContacts();
}, []);

//Crear 
const addContact = async (newContact) => {
    const payload = {
      name: newContact.name,
      email: newContact.email,
      phone: newContact.phone,
      address: newContact.address
    };
    const res = await fetch(`${API_BASE}/agendas/ayakta/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Error al crear contacto");
    const created = await res.json();
    setContacts(prev => [
      ...prev,
      {
        id: created.id,
        name: created.name,
        email: created.email,
        phone: created.phone,
        address: created.address,
        imagen: created.imagen || "https://i.pinimg.com/736x/8f/52/79/8f5279cb77fc929deee15c144595faf2.jpg"
      }
    ]);
  };

  // method: DELETE
  const deleteContact = async (id) => {
    const res = await fetch(`${API_BASE}/agendas/ayakta/contacts/${id}`, {
      method: "DELETE"
    });
    if (!res.ok) throw new Error("Error al borrar contacto");
    setContacts(prev => prev.filter(c => c.id !== id));
  };

//  Actualizar
const updateContact = async (updated) => {
    const payload = {
      name: updated.name,
      email: updated.email,
      phone: updated.phone,
      address: updated.address
    };
    const res = await fetch(`${API_BASE}/agendas/ayakta/contacts/${updated.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Error al actualizar contacto");
    const data = await res.json();
    setContacts(prev =>
      prev.map(c =>
        c.id === updated.id
          ? {
                ...c,
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address
            }
          : c
      )
    );
  };

  return (
    <ContactContext.Provider value={{ contacts, loading, error, addContact, deleteContact, updateContact }}>
      {children}
    </ContactContext.Provider>
  );
};
