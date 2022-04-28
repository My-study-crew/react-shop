import React, { useState } from "react";
import "@styles/ProductItem.scss";
import addCartIcon from "@icons/bt_add_to_cart.svg";
import addedToCartIcon from "@icons/bt_added_to_cart.svg";

const ProductItem = ({ product }) => {
    const [cart, setCart] = useState(addCartIcon);

    const handleClick = () => {
        setCart(addedToCartIcon);
    };

    return (
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={cart} alt="cart" />
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;
