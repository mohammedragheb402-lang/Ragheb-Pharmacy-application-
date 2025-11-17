
const fs = require('fs');
const path = require('path');
const dbFile = path.join(__dirname, '..', '..', 'orders.json');

function loadDB(){ try{return JSON.parse(fs.readFileSync(dbFile,'utf8'))}catch{return[]} }
function saveDB(d){ fs.writeFileSync(dbFile,JSON.stringify(d,null,2)) }

exports.handler = async(event)=>{
  const method = event.httpMethod;
  let orders = loadDB();
if(method==='GET') return {statusCode:200,body:JSON.stringify(orders)};
return{statusCode:405};}