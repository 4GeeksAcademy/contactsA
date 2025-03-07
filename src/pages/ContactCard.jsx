export const ContactCard = ({ contact }) => {
    return (
      <div className="d-flex align-items-center border p-3 mb-2 rounded">
        <div className="me-4">
          <img 
            src="https://i.pinimg.com/736x/8f/52/79/8f5279cb77fc929deee15c144595faf2.jpg" 
            className="rounded-circle"
            style={{ width: "10vw", height: "10vw", objectFit: "cover" }} 
            alt="Imagen"
          />
        </div>
        <div className="me-3 text-left w-100">
          <h5>{contact.fullname}</h5>
          <p className="m-0">{contact.phone}</p>
          <p className="m-0">{contact.email}</p>
          <p className="m-0">{contact.address}</p>
        </div>
        <div className="me-3">
          <button className="btn btn-primary m-1">Editar</button>
          <button 
            type="button" 
            className="btn btn-primary m-1" 
            data-bs-toggle="modal" 
            data-bs-target={`#deleteModal-${contact.id}`}>
            Eliminar
          </button>
        </div>
  
        {/* Modal de eliminación */}
        <div className="modal fade" id={`deleteModal-${contact.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Eliminar Contacto</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ¿Estás seguro de que quieres eliminar a {contact.fullname}?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-danger">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  