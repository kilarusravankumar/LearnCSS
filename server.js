const express=require("express");
const app=express();

//all Html files in views
app.use(express.static(__dirname+'/Views'));

app.get('/',(req,res)=>{
    res.sendfile('/index.html');
});
app.post('/',(req,res)=>{
   
    //res.send(insertionSort(req.body));
    console.log(req.params);
})
//function insertionSort( n){
//    return n.toString().split("").map((i)=>{
//        parseInt(i);
//    })
//}

app.listen(3000);