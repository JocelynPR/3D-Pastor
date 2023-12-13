// BuyButton.jsx
import React from "react";

const BuyButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="btn btn-outline-dark">
            Comprar
        </button>
    );
};

export default BuyButton;
