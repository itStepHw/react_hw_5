import React, { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [year, setYear] = useState("");
    const [manufacturer, setManufacturer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({ name, description, price: Number(price), year, manufacturer });
        setName("");
        setDescription("");
        setPrice("");
        setYear("");
        setManufacturer("");
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <h3>Добавить товар</h3>
            <input
                type="text"
                placeholder="Название"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Цена"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Год выпуска"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Производитель"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
                required
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default ProductForm;