import React, { useState } from 'react';
import { useContacts } from "./ContactContext";
import { ContactCard } from "./ContactCard";

export const Contacts = () => {
  const { contacts, deleteContact } = useContacts();
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDeleteClick = (contact) => {
    setContactToDelete(contact);
  };

  const confirmDelete = () => {
    if (contactToDelete) {
      deleteContact(contactToDelete.id);
      setContactToDelete(null);
    }
  };

  const cancelDelete = () => {
    setContactToDelete(null);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Lista de contactos</h1>

      <hr />
      
      {contacts.map(contact => (
        <ContactCard 
          key={contact.id}
          {...contact}
          onEdit={() => console.log("Editar", contact.id)}
          onDelete={() => handleDeleteClick(contact)}
        />
      ))}

			{/* Confirmar la eliminación */}
			{contactToDelete && (
				<div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Confirmar eliminación</h5>
								<button type="button" className="btn-close" onClick={cancelDelete}></button>
							</div>
							<div className="modal-body">
								<p>¿Seguro que quieres eliminar a <strong>{contactToDelete.name}</strong>?</p>
							</div>
							<div className="modal-footer">
								<button className="btn btn-secondary" onClick={cancelDelete}>Cancelar</button>
								<button className="btn btn-danger" onClick={confirmDelete}>Eliminar</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};