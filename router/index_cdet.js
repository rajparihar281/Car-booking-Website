let express=require('express')
let router=express.Router();
let db=require('../config/database');
router.get('/',(req,res)=>{
    let sql='select * from car_details';
    db.query(sql,(err,result)=>{
        if(!err)
        {
res.render('car_details',{car_details:result});
        }
        else{
            
console.log('error occured')
        }
    });
});
module.exports=router;
