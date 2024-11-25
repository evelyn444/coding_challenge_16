import React from 'react'

const ProductItem = ({product})=> {
    return(
        <li>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </li>
    ); // lists the products with price and description
};
export default ProductItem;
