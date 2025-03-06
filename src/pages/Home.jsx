export const Home = () => {

	return (
		<div className="container">
			<h1 className="text-center m-4">Lista de contactos</h1>

			<div className="d-flex align-items-center justify-content-between">
			<div className="me-4">
				<img 
				src="https://i.pinimg.com/736x/8f/52/79/8f5279cb77fc929deee15c144595faf2.jpg" 
				className="rounded-circle"
				style={{ width: "10vw", height: "10vw", objectFit: "cover" }} 
				alt="Imagen"
				/>
			</div>
			<div className="me-3 text-left w-100">
				<h5>Nombre</h5>
				<p className="m-0">Número</p>
				<p className="m-0">Correo</p>
				<p className="m-0">Dirección</p>
			</div>
			<div className="me-3">
				<button className="btn btn-primary m-1">Editar</button>
				<button 
				type="button" 
				className="btn btn-primary m-1" 
				data-bs-toggle="modal" 
				data-bs-target="#staticBackdrop">
				Eliminar
				</button>
			</div>
			</div>

			{/* Modal */}
			<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div className="modal-body">
					...
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" className="btn btn-primary">Understood</button>
				</div>
				</div>
			</div>
			</div>
  </div>
	);
}; 