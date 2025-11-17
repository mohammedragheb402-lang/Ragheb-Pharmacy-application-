
import React, { useState, useEffect } from 'react'
import PatientView from './PatientView'
import CartView from './CartView'
import OrdersView from './OrdersView'
import PharmacyView from './PharmacyView'
import PharmacyOrders from './PharmacyOrders'

export default function App(){
  const [view,setView]=useState('patient')
  const [drugs,setDrugs]=useState([])
  const [cart,setCart]=useState([])
  const [orders,setOrders]=useState([])

  const loadOrders=async()=>{
    const r=await fetch('/.netlify/functions/getOrders')
    setOrders(await r.json())
  }

  useEffect(()=>{ loadOrders() },[])

  const addToCart=(x)=>setCart(p=>[...p,x])

  const placeOrder=async()=>{
    const r=await fetch('/.netlify/functions/addOrder',{method:'POST',body:JSON.stringify({items:cart})})
    await loadOrders()
    setCart([])
  }

  return (
    <div className="app">
      <nav>
        <button onClick={()=>setView('patient')}>المريض</button>
        <button onClick={()=>setView('cart')}>السلة</button>
        <button onClick={()=>{loadOrders();setView('orders')}}>متابعة الطلب</button>
        <button onClick={()=>setView('pharmacy')}>الصيدلية</button>
        <button onClick={()=>{loadOrders();setView('pharmacyOrders')}}>طلبات الصيدلية</button>
      </nav>

      {view==='patient' && <PatientView drugs={drugs} addToCart={addToCart} />}
      {view==='cart' && <CartView cart={cart} placeOrder={placeOrder} />}
      {view==='orders' && <OrdersView orders={orders} />}
      {view==='pharmacy' && <PharmacyView drugs={drugs} setDrugs={setDrugs} />}
      {view==='pharmacyOrders' && <PharmacyOrders orders={orders} reload={loadOrders} />}
    </div>
  )
}
