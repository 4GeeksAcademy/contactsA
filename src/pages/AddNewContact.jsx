import React, { useState } from "react"; // Asegúrate de importar useState
import { useContacts } from "./ContactContext";
import { useNavigate } from "react-router-dom";

export const AddNewContact = () => {
  const { addContact } = useContacts();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    try {
      await addContact(formData);
      navigate("/");
    } catch (err) {
        setError(err.message || "Error al guardar contacto");
      } finally {
        setIsSubmitting(false);
      }
  };

  return (
    <div className="container">
      <form className="p-4 bg-light rounded w-100" onSubmit={handleSubmit}>
      <h1 className="w-100 text-center">Añadir un nuevo contacto</h1>

      {error && <div className="alert alert-danger">{error}</div>}
      <label className="mb-2 w-100">
        Nombre:
        <input
          type="text"
          name="name"
          className="w-100 p-2 form-control"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label className="mb-2 w-100">
        Correo electrónico:
        <input
          type="text"
          name="email"
          className="w-100 p-2 form-control"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label className="mb-2 w-100">
        Número:
        <input
          type="text"
          name="phone"
          className="w-100 p-2 form-control"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      <label className="mb-2 w-100">
        Dirección:
        <input
          type="text"
          name="address"
          className="w-100 p-2 form-control"
          value={formData.address}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className="mt-2 p-2 btn btn-primary w-100" disabled={isSubmitting}>
        {isSubmitting ? "Guardando…" : "Guardar"}
      </button>
      </form>
    </div>
  );
};
