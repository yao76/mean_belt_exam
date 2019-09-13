const express = require("express");
const app = express();
const bp = require("body-parser");
var validate = require('mongoose-unique-validator');
app.use(bp.json());
app.use(express.static( __dirname + '/public/dist/public' ));

const port = process.env.PORT || 8000;

require('./routes')(app)


app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`listening on port ${port}`);
    }
})