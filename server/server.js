import express from "express";

const port = process.env.PORT || 3000;
const server = express();

server.get("/", (req, res) => {
    res.status(200).json({success : true, msg : "homepage"})
})

server.listen(port, () => console.log(`server is listening on ${port}...`))