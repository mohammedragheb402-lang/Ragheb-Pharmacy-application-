
const fs = require('fs');
const path = require('path');
const dbFile = path.join(__dirname, '..', '..', 'orders.json');

function loadDB(){ try{return JSON.parse(fs.readFileSync(dbFile,'utf8'))}catch{return[]} }
function saveDB(d){ fs.writeFileSync(dbFile,JSON.stringify(d,null,2)) }

exports.handler = async(event)=>{
  const method = event.httpMethod;
  let orders = loadDB();

if(method==='POST'){
  const b=JSON.parse(event.body||'{}')
  const o={id:Date.now(),items:b.items||[],status:'قيد المراجعة',createdAt:new Date().toLocaleString()}
  orders.push(o); saveDB(orders)
  return {statusCode:200,body:JSON.stringify(o)}
}
return{statusCode:405}
}
