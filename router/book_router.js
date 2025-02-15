let express=require('express');
let db=require('../config/database');
let router=express.Router();
router.post('/add',(req,res)=>{
    let{name,email,number,car_model,car_number,date,time}=req.body;
let body={name:name,email:email,number:number,car_model:car_model,car_number:car_number,date:date,time};
let sql='insert into book_car set?';
db.query(sql,body,(err,result)=>{

    if(!err)
 {
     req.flash('success_message', 'Success!!');
    res.redirect('/book_car');

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

