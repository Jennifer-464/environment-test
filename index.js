const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'));


router.get('/',function(req,res){
    res.render(path.join(__dirname+'/home.ejs'));
});

router.get('/home.ejs',function(req,res){
    res.render(path.join(__dirname+'/home.ejs'));
});

router.get('/about.ejs',function(req,res){
    res.render(path.join(__dirname+'/views/about.ejs'));
});

app.use('/', router);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on Port ${port}`));