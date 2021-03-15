import React from 'react';
import ShowImage from "./ShowImage";

const Card = ({product}) => {
    return (
        <div className="col-9 mb-3">
            <div className="card">
                <div className="card-header">{product.name}</div>
                <div className="card-body">
                    <ShowImage item={product} url="product" />
                    <p className="desc">{product.description}</p>
                    <p className="price">Price: {product.price}€</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
