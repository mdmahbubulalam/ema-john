import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div>
            <div className="d-flex p-2">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h5 className="text-primary">
                        <Link to={`/product/${key}`}>{name}</Link>
                    </h5>
                    <p>
                        <small>by {seller}</small>
                    </p>
                    <p className="mt-5">${price}</p>
                    <p>
                        <small>only {stock} in stock - order soon</small>
                    </p>
                    {props.showAddToCart && (
                        <button
                            type="button"
                            className="btn btn-warning btn-small"
                            onClick={() => props.handleAddProduct(props.product)}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                        </button>
                    )}
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Product;
