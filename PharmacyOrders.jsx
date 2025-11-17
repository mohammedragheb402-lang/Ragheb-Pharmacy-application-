
import React from 'react'

export default function({orders,reload}){
  const changeStatus = async(id,status)=>{
    await fetch('/.netlify/functions/updateOrder',{method:'PUT',body:JSON.stringify({id,status})})
    reload()
  }
  return <>
    <h3>طلبات الصيدلية</h3>
    <table className="table"><tbody>
      {orders.map(o=><tr key={o.id}>
        <td>{o.id}</td><td>{o.status}</td>
        <td>
          <select value={o.status} onChange={e=>changeStatus(o.id,e.target.value)}>
            <option>قيد المراجعة</option>
            <option>جاري التجهيز</option>
            <option>جاهز للاستلام</option>
            <option>تم التسليم</option>
            <option>مرفوض</option>
          </select>
        </td>
      </tr>)}
    </tbody></table>
  </>
}
