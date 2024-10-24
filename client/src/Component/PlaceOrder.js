import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PlaceOrder() {
  const location = useLocation();
  const navigate = useNavigate()
  const [kg, setKg] = useState(1)
  const { product } = location.state || {}; 
  const handleDec =()=>{
    if(kg>0.5){
      setKg(pre=>pre-0.5)
    }
  }

  const handleInc =()=>{
    setKg(pre=>pre+0.5)
  }
  const handleOrder = () =>{
    alert("Your order is placed")
    navigate('/payment')
  }

  return (
    <div>
      {product ? (
        <div  >
          <div className='place-card' >
          <div className='place-card-img'>
          <img src={product.imgUrl} alt={product.cakename} />
          <h2>{product.cakename}</h2>
            <div className='place-card-btn-div'>
              <button className='btn' onClick={handleDec}>-</button>
              <p>Qty:{kg}kg</p>
              <button className='btn' onClick={handleInc}>+</button>
            </div>
          <p>Rs.{product.price*kg}</p>
          </div>
          </div>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
      <div className='place-order'>
      <div className='place-left'>
        <p className='place-title'>Delivery Information</p>
        <div className='multi-field'>
          <input placeholder='First-Name' type='text' />
          <input placeholder='Last-Name' type='text' />
        </div>
      <div className='place-right'>
        <input type='text' placeholder='E-mail' />
        <input type='text' placeholder='Street' />
        <div className='multi-field'>
          <input placeholder='City' type='text' />
          <input placeholder='State' type='text' />
        </div>
        <div className='multi-field'>
          <input placeholder='Zipcode' type='text' />
          <input placeholder='Country' type='text' />
        </div>
        <input type='text' placeholder='Phone'/>
      </div>
      </div>
      <div className='place-order-right'>
      <div className='cart-total'>
          <h2>Total Amount</h2>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{product.price*kg}</p>
            </div>
            <div className='cart-total-details'>
              <p>Deliver Fees</p>
              <p>2</p>
            </div>
            <div className='cart-total-details'><b>Total</b>
              <b>{product.price*kg+2}</b>
            </div>
          <button onClick={handleOrder} >Proceed to Payment</button>
        </div>
      </div>
      </div>
    </div>
    
  )
}
