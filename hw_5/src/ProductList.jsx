import React from "react";

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Цена: ${product.price}</p>
                    <p>Год выпуска: {product.year}</p>
                    <p>Производитель: {product.manufacturer}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;