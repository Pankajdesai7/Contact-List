const express=require('express');
var bodyParser = require('body-parser')
const path=require('path');
const port=8000;


/*const db=require('./config/mongoose');*/
const app=express();
const contact=[
    {
        name:'Pankaj',
        number:'9763844654'
    },
    {
        name:'Pravin',
        number:'1234567890'
    },
    {
        name:'gundan',
        number:'66666666'
    }
];
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.urlencoded());
app.use(express.static('assets'));

// //middleware 1
// app.use(function(req,res,next){

//     req.Myname="Pankaj";
//     //console.log("Middleware 1");
//     next();//if we will not call next then page will continuosly load. 
// });

// app.use(function(req,res,next){
//   console.log("Middleware 2 accessing req.Myname",req.Myname);
//   next();
// });



app.get('/practice',function(req,res){
    return res.render('practice');
});

app.get('/',function(req,res){
    res.render('home',{
        title:'contact list',
        contact_list:contact
    });
});
app.post('/get-practice',function(req,res){
    contact.push(req.body);
     //contact.push(req.body);
    return res.redirect('/');
});
app.get('/get-contact/',function(req,res){
     //fetching the number from url
    let phone=req.query.number;

    let contactIndex=contact.findIndex(contact => contact.number==phone);
    if(contactIndex!=-1)
    {
        contact.splice(contactIndex,1);
    }
     return res.redirect('back');
})


app.listen(port,function(err){
    console.log("server is up");
});