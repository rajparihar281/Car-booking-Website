let express=require('express')
let router=express.Router();
let db=require('../config/database');
router.get('/',(req,res)=>{
    let sql='select * from contact_us';
    db.query(sql,(err,result)=>{
        if(!err)
        {
res.render('contact_us',{Contact_us:result});
        }
        else{
console.log('error occured')
        }
    });
});
module.exports=router;
