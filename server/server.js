
const express = require("express");
const cors = require("cors")

let app = express();
app.use(cors());

app.get("/devaraCast",(req,res)=>{
    let devaraCast = ["NTR","Jahnavi","Saif","Srikanth","Prakash Raj","Murali Sharma", "Koratala Shiva"];

    res.json(devaraCast);
    });

    app.get("/kalkiCast",(req,res)=>{
        let kalkiCast = ["Prabhas","Amitabh","Kamal Hasan","Deepika"];
        res.json(kalkiCast);
    });

app.listen(2222,()=>{
    console.log("listening to the port 2222 ");
});