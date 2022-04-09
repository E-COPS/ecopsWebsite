import express from "express";
import morgan from "morgan";
const path = require("path");
const PORT=3456;

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

const app=express();
const logger= morgan("dev");

app.listen(PORT, handleListening);
app.use(express.static("../client"));
app.use(logger);
app.use(express.urlencoded({extended:true}));

app.get("/", function(req,res) {
    res.sendFile(path.resolve(__dirname + "../../../client/main.html"));
 });
 app.get("/main-dark", function(req,res) {
   res.sendFile(path.resolve(__dirname + "../../../client/main-dark.html"));
});
 app.get("/members", function(req,res) {
    res.sendFile(path.resolve(__dirname + "../../../client/members.html"));
 });
 app.get("/members-dark", function(req,res) {
   res.sendFile(path.resolve(__dirname + "../../../client/members-dark.html"));
});
 app.get("/activity", function(req,res) {
   res.sendFile(path.resolve(__dirname + "../../../client/activity.html"));
});
app.get("/activity-dark", function(req,res) {
   res.sendFile(path.resolve(__dirname + "../../../client/activity-dark.html"));
});
app.get("/recruit", function(req,res) {
   res.sendFile(path.resolve(__dirname + "../../../client/recruit.html"));
});
app.get("/recruit-dark", function(req,res) {
   res.sendFile(path.resolve(__dirname + "../../../client/recruit-dark.html"));
});


export default app;