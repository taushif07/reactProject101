import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import "./Payment.css";
import { Link } from 'react-router-dom';



function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
    const handleOnClick = () => {
        return alert(`Thanks ${user?.email}, Your Order has been Placed Successfully`)
    }
  return (
    <div className='payment'>
      <div className="payment__container">
        <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
        <div className="payment__section">
            <div className="payment__title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Dhandbad,Jharkhand</p>
            </div>
        </div>
        <div className="payment__section">
            <div className="payment__title">
                <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
                {basket.map(item => (
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
                <button onClick={handleOnClick}>Placed Order</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
