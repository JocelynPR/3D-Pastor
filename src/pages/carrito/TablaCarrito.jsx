import "../../styles/carrito/carrito.css";
import ReadFromLocalStorage from "./ReadFromLocalStorage";

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
                {/* <tbody> */}
                <ReadFromLocalStorage />
                {/* </tbody> */}
            </table>
        </div>
    );

};

export default TablaCarrito;


