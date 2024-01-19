import React, { useState } from "react";
import "../../styles/productRegistration/productRegistration.css";

function ProductRegistration() {
  const initialProductState = {
    name: "",
    photo: "",
    quantity: "",
    category: "",
    description: "",
    price: "",
  };

  const [product, setProduct] = useState(initialProductState);
  const [showAlert, setShowAlert] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProduct({ ...product, photo: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud POST usando fetch
      const response = await fetch("http://localhost:8080/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      // Verificar si la solicitud fue exitosa (código 2xx)
      if (response.ok) {
        // Limpiar el formulario y mostrar la alerta
        setProduct(initialProductState);
        setShowAlert(true);
      } else {
        // Manejar errores en caso de que la solicitud no sea exitosa
        const errorData = await response.json();
        console.error("Error al crear el producto:", errorData);
        // Puedes mostrar un mensaje de error o realizar otra acción
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      // Puedes mostrar un mensaje de error o realizar otra acción
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    setProduct(initialProductState);
  };


  return (
    <div className="login-container-admin">
      <h2>Registro de productos</h2>
      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Producto registrado con éxito.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleAlertClose}
          ></button>
        </div>
      )}
      <form onSubmit={handleSubmit} id="formularioContacto">
        <label>
          Nombre del producto: <br />
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
            className="form-control-contacto"
          />
        </label>
        <br />

        <label>
          Imagen: <br />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="form-control-contacto"
          />
        </label>
        {product.photo && (
          <img
            src={product.photo}
            alt="Product"
            style={{ maxWidth: "200px" }}
          />
        )}
        <br />

        <label>
          Cantidad: <br />
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
            required
            className="form-control-contacto"
          />
        </label>
        <br />

        <label>
          Categoría: <br />
          <select
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="form-control-contacto"
          >
            <option value="">Selecciona una categoría</option>
            <option value="Accesorios">Accesorios</option>
            <option value="Juguete">Juguetes</option>
            <option value="Postres">Postres</option>
          </select>
        </label>
        <br />

        <label>
          Descripción: <br />
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
            className="form-control-contacto"
          />
        </label>
        <br />

        <label>
          Precio en MXN: <br />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
            className="form-control-contacto"
          />
        </label>
        <br />

        <button
          type="submit"
          className="btn btn-outline-dark"
          variant="primary"
          id="boton-verificador-password"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default ProductRegistration;
