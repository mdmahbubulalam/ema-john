import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    const removeProduct = (productKey) => {
        const newCart = cart.filter((pd) => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    };
    useEffect(() => {
        // cart data
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map((key) => {
            const product = fakeData.find((pd) => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);

    let thankyou;
    if(orderPlaced) {
        thankyou = <img src={happyImage} alt="" />;
    }
    return (
        <div className="container">
            <div className="row p-3">
                <div className="col-md-10">
                    {cart.map((pd) => (
                        <ReviewItem key={pd.key} removeProduct={removeProduct} product={pd} />
                    ))}
                    {thankyou}
                </div>
                <div className="col-md-2 cart-container">
                    <Cart cart={cart}>
                        <button type="button" className="btn btn-warning" onClick={handlePlaceOrder}>
                            Place Order
                        </button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;
