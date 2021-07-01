import React from 'react';

const ReviewItem = (props) => {
    console.log(props.product);
    const { key, img, name, quantity, price } = props.product;
    return (
        <div>
            <div className="d-flex">
                <div className="pr-2">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>Quantity: {quantity}</p>
                    <p>
                        <small>Price : ${price}</small>
                    </p>
                    <br />
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => props.removeProduct(key)}
                    >
                        Remove
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default ReviewItem;
