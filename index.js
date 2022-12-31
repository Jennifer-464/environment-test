const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'));


router.get('/',function(req,res){
    res.render(path.join(__dirname+'/views/home.ejs'));
});

app.use('/', router);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on Port ${port}`));