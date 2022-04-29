import React, { useState, useContext } from "react";
import AppContext from "@context/AppContext";
import "@styles/ProductItem.scss";
import addToCartIcon from "@icons/bt_add_to_cart.svg";
import addedToCartIcon from "@icons/bt_added_to_cart.svg";

const ProductItem = ({ product }) => {
    const [cart, setCart] = useState(addToCartIcon);
    const { addToCart } = useContext(AppContext);

    const handleIcon = () => {
        if (cart == addToCartIcon) {
            setCart(addedToCartIcon);
        } else {
            setCart(addToCartIcon);
        }
    };

    const handleClick = (item) => {
        handleIcon();
        addToCart(item);
    };

    return (
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={cart} alt="cart" />
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;
