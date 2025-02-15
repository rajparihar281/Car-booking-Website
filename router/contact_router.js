let express=require('express');
let db=require('../config/database');
let router=express.Router();
router.post('/add',(req,res)=>{
    let{name,email,message}=req.body;
let body={name:name,email:email,message:message};
let sql='insert into contact_us set?';
db.query(sql,body,(err,result)=>{

    if(!err)
 {
    req.flash('message', 'Success!!');
    res.redirect('/contact_us');
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


router.get('/',(req,res)=>{
    let sql='select * from user_det';
    db.query(sql,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:result
                            });
        }
        else
        {
            res.status(400).json({
                msg:'error',
                error:err
            });
        }
    
    });

});

//delete
router.delete('/:email',(req,res)=>{
    let{id}=req.params;
    let sql='delete from user_det where email=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err){
            res.status(200).json({
                msg:'company deleted'
                           });
        }
        else{
            res.status(400).json({
                msg:'error',
                error:err
            });
        }
    });
});
//update/ 
/*
router.put('/:id',(req,res)=>{
    let{id}=req.params;
    let{name,year}=req.body;
        let sql='update company set name=?,founding_year=? where id=?';
    let body=[name,year,id];
    db.query(sql,body,(err,result)=>{
        if(!err){
            res.status(200).json({
                msg:'company updated'
                           });
        }
        else{
            res.status(400).json({
                msg:'error',
                error:err
            });
        }
    });
});*/