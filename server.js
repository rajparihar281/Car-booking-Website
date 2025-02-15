let express=require('express');
let app=express();
let port=3001;
//router files declare//
let add_car=require('./router/add_car');
let book_Car=require('./router/book_car');
let book_router=require('./router/book_router');
let add_router=require('./router/add_router');
let contact_router=require('./router/contact_router');
let contact_us=require('./router/contact_us');
let home=require('./router/home');
let index_cdet=require('./router/index_cdet');//backup file
let login_router=require('./router/login_router');
let login=require('./router/loginp');
//files ended //
let flash = require('connect-flash');
let session = require('express-session');
let path=require('path');
let {engine}=require('express-handlebars');
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'views'));
app.engine('.handlebars',engine({extname:'.handlebars'}));
app.use(express.static(path.join('public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(flash());
app.use(session({
    secret:'secret',
    saveUninitialized:true,
    resave:true 
}));

app.use((req,res,next)=>{
    app.locals.error=req.flash('error');
    app.locals.error_msg=req.flash('error_msg');
    app.locals.success_msg=req.flash('success_msg');
    next();
});

//files using //
app.use('/loginp',login);
app.use('/login_router',login_router);
app.use('/add_router',add_router);
app.use('/book_router',book_router);
app.use('/contact_router',contact_router);
app.use('/home',home);
app.use('/add_car',add_car);
app.use('/book_car',book_Car);
app.use('/contact_us',contact_us);
app.use('/index_cdet',index_cdet);
//files use ended//
app.listen(port,()=>
{
    console.log(`server started on port ${port}`);
});
  