import "../../styles/carrito/carrito.css";

const TablaCarrito = ({ productos }) => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, index) => (
                        <tr key={index}>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio.toFixed(2)}</td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.subtotal.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaCarrito;


