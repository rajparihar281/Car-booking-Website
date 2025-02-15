let express=require('express')
let router=express.Router();
let db=require('../config/database');
router.get('/',(req,res)=>{
    let sql='select * from book_car';
    db.query(sql,(err,result)=>{
        if(!err)
        {
res.render('book_car',{book_car:result});
        }
        else{
console.log('error occured')
        }
    });
});
module.exports=router;
