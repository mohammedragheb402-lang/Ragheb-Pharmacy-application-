
const fs = require('fs');
const path = require('path');
const dbFile = path.join(__dirname, '..', '..', 'orders.json');

function loadDB(){ try{return JSON.parse(fs.readFileSync(dbFile,'utf8'))}catch{return[]} }
function saveDB(d){ fs.writeFileSync(dbFile,JSON.stringify(d,null,2)) }

exports.handler = async(event)=>{
  const method = event.httpMethod;
  let orders = loadDB();

if(method==='PUT'){
  const b=JSON.parse(event.body||'{}')
  orders=orders.map(o=>o.id===b.id?{...o,status:b.status}:o)
  saveDB(orders)
  return {statusCode:200,body:JSON.stringify(b)}
}
return{statusCode:405}
}
