let express=require('express')
let router=express.Router();
let db=require('../config/database');
router.get('/',(req,res)=>{
    let sql='select * from login';
    db.query(sql,(err,result)=>{
        if(!err)
        {
res.render('login',{login:result});
        }
        else{
console.log('error occured')
        }
    });
});
module.exports=router;
