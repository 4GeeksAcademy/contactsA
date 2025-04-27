import React, { useState } from 'react';
import { useContacts } from "./ContactContext";
import { ContactCard } from "./ContactCard";

export const Contacts = () => {
	const { contacts, loading, error, deleteContact, updateContact } = useContacts();
  	const [contactToDelete, setContactToDelete] = useState(null);

	// Manejar error y carga
	if (loading) return <div className="text-center my-4">Cargando contactos…</div>;
	if (error)   return <div className="text-center my-4 text-danger">Error: {error}</div>;

 	const [contactToEdit, setContactToEdit] = useState(null);
  	const [editForm, setEditForm] = useState({ name: "", phone: "", email: "", address: "" });

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

  const handleEditClick = (contact) => {
    setContactToEdit(contact);
    setEditForm({ 
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      address: contact.address
    });
  };
  const handleEditChange = e => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };
  const handleEditSubmit = e => {
    e.preventDefault();
    updateContact({
      id: editForm.id,
      name: editForm.name,
      phone: editForm.phone,
      email: editForm.email,
      address: editForm.address,
      imagen: contacts.find((contact) => contact.id === editForm.id).imagen
    });
    setContactToEdit(null);
  };
  const cancelEdit = () => setContactToEdit(null);

  return (
    <div className="container">
      <h1 className="text-center my-4">Lista de contactos</h1>

      <hr />
      
      {contacts.map(contact => (
        <ContactCard 
          key={contact.id}
          {...contact}
          onEdit={() => handleEditClick(contact)}
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

			{/* Modal Editar */}
			{contactToEdit && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <form className="modal-content" onSubmit={handleEditSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Editar contacto</h5>
                <button className="btn-close" type="button" onClick={cancelEdit} />
              </div>
              <div className="modal-body">
                <div className="mb-2">
                  <label>Nombre</label>
                  <input
                    name="name"
                    className="form-control"
                    value={editForm.name}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="mb-2">
                  <label>Teléfono</label>
                  <input
                    name="phone"
                    className="form-control"
                    value={editForm.phone}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="mb-2">
                  <label>Correo</label>
                  <input
                    name="email"
                    className="form-control"
                    value={editForm.email}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="mb-2">
                  <label>Dirección</label>
                  <input
                    name="address"
                    className="form-control"
                    value={editForm.address}
                    onChange={handleEditChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelEdit}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Guardar cambios</button>
              </div>
            </form>
          </div>
        </div>
      )}
		</div>
	);
};