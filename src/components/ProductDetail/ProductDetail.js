import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productKey } = useParams();
    const product = fakeData.find((pd) => pd.key === productKey);
    console.log(product);
    return (
        <div className="container">
            <div className="row">
                <h2>Your product detail</h2>
                <Product product={product} showAddToCart={false} />
            </div>
        </div>
    );
};

export default ProductDetail;
