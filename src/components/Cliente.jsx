function Cliente({cliente}){

    const { nombreCliente } = cliente
    const { precioVestido } = cliente
    const { telefono } = cliente
    const { fechaAlquiler } = cliente
    const { fechaDevuelto } = cliente
    const { descVestido } = cliente
    
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Cliente: <br/>
            <span className="font-normal normal-case">
               {nombreCliente}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Precio de la orden: <br/>
            <span className="font-normal normal-case">
                {precioVestido}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Numero Telefonico: <br/>
            <span className="font-normal normal-case">
                {telefono}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alquilado: <br/>
            <span className="font-normal normal-case">
                {fechaAlquiler}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha a devolver: <br/>
            <span className="font-normal normal-case">
                {fechaDevuelto}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Descripcion de la orden: <br/>
            <span className="font-normal normal-case">
                {descVestido}    
            </span>
        </p>
    </div>
  )
}
export default Cliente;