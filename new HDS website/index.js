
const express =require('express');
const app = express();

app.use(express.static('Public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('HDS');
});
app.get('/about',(req,res)=>{
    res.send("About Page");
})

app.listen(3000);