let express=require('express');
let db=require('../config/database');
let router=express.Router();
router.post('/add',(req,res)=>{
    let{name,email,car_model,car_number,available,till,cn}=req.body;
let body={name:name,email:email,car_model:car_model,car_number,available:available,till:till,cn:cn};
let sql='insert into add_car set?';
db.query(sql,body,(err,result)=>{
    if(!err)
 {
    req.flash('message', 'Success!!');
  res.redirect('/add_car');

 }
 else
 {
    res.status(400).json({
    msg:'not a valid input',
        error:err
    });
}
});
});
module.exports=router;
