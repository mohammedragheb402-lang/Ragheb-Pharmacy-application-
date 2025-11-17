
import React from 'react'
export default function({cart,placeOrder}){
  return <>
    <h3>السلة</h3>
    {cart.map((c,i)=><div key={i}>{c.name} — {c.price}</div>)}
    {cart.length>0 && <button onClick={placeOrder}>إرسال الطلب</button>}
  </>
}
