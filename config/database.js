const mysql=require('mysql');
const db=mysql.createConnection({
    host:'localhost',
    port:3306,
user:'root',
password:'0202',
database:'internship',
multipleStatements:true
});
db.connect((error)=>{
    if(!error)
{
    console.log('database connected');
}
else{
    console.log('error occured'+error);
}
});
module.exports=db