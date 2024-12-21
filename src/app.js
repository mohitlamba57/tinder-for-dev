import express from 'express';

const app = express();

app.use("/test", (req, res)=>{
    res.send("hello");
})

app.use("/", (req, res)=>{
    res.send("root");
})

app.listen(3000);