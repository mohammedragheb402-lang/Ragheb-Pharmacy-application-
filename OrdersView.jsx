
import React from 'react'
export default function({orders}){
  return <>
    <h3>متابعة الطلب</h3>
    <table className="table"><tbody>
      {orders.map(o=><tr key={o.id}>
        <td>{o.id}</td><td>{o.status}</td><td>{o.createdAt}</td>
      </tr>)}
    </tbody></table>
  </>
}
