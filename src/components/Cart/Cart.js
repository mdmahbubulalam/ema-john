import React from 'react'
import './Cart.css'

const Cart = (props) => {
  console.log(props)
  const cart = props.cart;
  // const total = cart.reduce((total,product) => total + product.price, 0)
  let total = 0
  for (let i = 0; i < cart.length; i += 1) {
    const product = cart[i]
    total += product.price * product.quantity
  }

  let shipping = 0

  if (total > 35) {
    shipping = 0
  } else if (total > 15) {
    shipping = 4.99
  } else if (total > 0) {
    shipping = 12.99
  }

  const tax = total / 10

  const formatNumber = (num) => {
    const precision = num.toFixed(2)
    return Number(precision)
  }

  const grandTotal = (total + shipping + tax).toFixed(2)

  return (
    <div>
      <h5>Order Summery</h5>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: {formatNumber(total)}</p>
      <p>
        <small>Tax + VAT: {formatNumber(tax)}</small>
      </p>
      <p>
        <small>Shipping Cost: {formatNumber(shipping)}</small>
      </p>
      <p>Total Price: {grandTotal}</p>
      {
        props.children
      }
    </div>
  )
}

export default Cart
