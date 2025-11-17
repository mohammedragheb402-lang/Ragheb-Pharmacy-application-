
import React,{useState} from 'react'
export default function({drugs,addToCart}){
  const [q,setQ]=useState('')
  const f=drugs.filter(x=> (x.name||'').toLowerCase().includes(q.toLowerCase()))
  return <>
    <h3>البحث</h3>
    <input value={q} onChange={e=>setQ(e.target.value)} placeholder="ابحث" />
    <table className="table"><tbody>
      {f.map((d,i)=><tr key={i}>
        <td>{d.name}</td><td>{d.price}</td>
        <td><button onClick={()=>addToCart(d)}>إضافة</button></td>
      </tr>)}
    </tbody></table>
  </>
}
