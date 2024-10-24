import React, { useState } from 'react'

export default function Payment() {
  const [amount, setAmount] = useState('')
  const handlePayment =()=>{
    if(amount === ''){
      alert('Enter Amount')
    }
    else{
      var options = {
        key :'rzp_test_zDcd4adgYcyOed',
        key_secret:'7rVrfzR6RPfRcdqLz7fME09V',
        amount: amount*100,
        currency: 'INR',
        name : 'AJ_ENTERPRISE',
        description:'For Testing Purpose',
        handle: function(response){
          alert(response.razorpay_payment_id)
        },
        prefill:{
          name:'Jose',
          email:'joseantony1142@gmail.com',
          contact: '8608199698'
        },
        notes:{
          address:'razorpay corporation office'
        },
      }
      var pay = new window.Razorpay(options)
      pay.open()
    }
  }

  return (
    <div className='payment-main-div'>
        <h1>Payment Gateway</h1>
        <input type="text" placeholder='Enter Amount' value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
        <button onClick={handlePayment}>pay Now</button>
    </div>
  )
}
