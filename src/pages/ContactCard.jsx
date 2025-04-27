export const ContactCard = ({ name, number, email, address, imagen, onEdit, onDelete }) => {
	return (
		<div className="d-flex align-items-center justify-content-between border rounded p-3 mb-3 shadow-sm">
			<div className="me-4">
				<img 
					src={imagen}
					className="rounded-circle"
					style={{ width: "10vw", height: "10vw", objectFit: "cover" }} 
					alt="Imagen contacto"
				/>
			</div>
			<div className="me-3 text-left w-100">
				<h5>{name}</h5>
				<p className="m-0"><strong>Número:</strong> {number}</p>
				<p className="m-0"><strong>Correo:</strong> {email}</p>
				<p className="m-0"><strong>Dirección:</strong> {address}</p>
			</div>
			<div className="me-3">
				<button className="btn btn-warning m-1" onClick={onEdit}>Editar</button>
				<button className="btn btn-danger m-1" onClick={onDelete}>Eliminar</button>
			</div>
		</div>
	);
};