let express=require('express')
let router=express.Router();
let db=require('../config/database');
router.get('/',(req,res)=>{
    let sql='select * from add_car';
    db.query(sql,(err,result)=>{
        if(!err)
        {
res.render('add_car',{add_car:result});
        }
        else{
console.log('error occured')
        }
    });
});
module.exports=router;
