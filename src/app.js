import express from 'express';

const app = express();

app.get("/user/:id/:name", (req, res)=>{
    console.log(req.params);
    res.send("Posting");
})

app.get("/data", (req, res)=>{
    console.log(req.query);
    res.send("Posting DATA");
})

app.use("/test", (req, res)=>{
    res.send("hello");
})


app.listen(3000);