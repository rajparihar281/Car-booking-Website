let express=require('express')
let router=express.Router();
let db=require('../config/database');
router.get('/',(req,res)=>{
    let sql='select * from home ';
    db.query(sql,(err,result)=>{
        if(!err)
        {
res.render('home',{home:result});
        }
        else{
console.log('error occured')
        }
    });
});
module.exports=router;
