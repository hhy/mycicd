const express=require('express');
const app=express();

app.get("/", function(req, resp){
    resp.send("hello");
});


app.listen(3000, function(){
    console.info("server is up");
});

