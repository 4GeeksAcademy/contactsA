
export const AddNewContact = () => {

  return (
    <div className="container">
      <form className="p-4 bg-gray-100 rounded-md w-80 d-flex flex-wrap">
      <h1 className="w-100 text-center">Añadir un nuevo contacto</h1>
      <label className="mb-2 w-100">
        Nombre:
        <input
          type="text"
          name="fullname"
          className="w-100 p-2 form-control"
        />
      </label>

      <label className="mb-2 w-100">
        Correo electrónico:
        <input
          type="text"
          name="email"
          className="w-100 p-2 form-control"
        />
      </label>

      <label className="mb-2 w-100">
        Número:
        <input
          type="text"
          name="phone"
          className="w-100 p-2 form-control"
        />
      </label>

      <label className="mb-2 w-100">
        Dirección:
        <input
          type="text"
          name="address"
          className="w-100 p-2 form-control"
        />
      </label>

      <button type="submit" className="mt-2 p-2 btn btn-primary w-100">
        Guardar
      </button>
      </form>
    </div>
  );
};
