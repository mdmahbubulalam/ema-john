
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const data = fakeData;
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map((productKey) => {
            const product = fakeData.find((pd) => pd.key === productKey);
            product.quantity = savedCart[productKey];
            return product;
        });
        setCart(previousCart);
    }, []);

    const handleAddProduct = (product) => {
        const sameProduct = cart.find((pd) => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter((pd) => pd.key !== product.key);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    {products.map((product) => (
                        <Product
                            showAddToCart
                            product={product}
                            key={product.key}
                            handleAddProduct={handleAddProduct}
                        />
                    ))}
                </div>
                <div className="col-md-2 cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button type="button" className="btn btn-warning">
                                Review Order
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
