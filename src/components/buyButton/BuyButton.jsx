// BuyButton.jsx
import React from "react";

const BuyButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="buy-button">
            Comprar
        </button>
    );
};

export default BuyButton;
