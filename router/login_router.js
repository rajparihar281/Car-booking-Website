let express=require('express');
let db=require('../config/database');
let router=express.Router();
router.post('/add',(req,res)=>{
    let{email,password}=req.body;
let body={email:email,password:password};
let sql='insert into login set?';
db.query(sql,body,(err,result)=>{

    if(!err)
 {
    req.flash('message','Success!!');
    res.redirect('/home');
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