const express = require("express");
const router = express.Router();

//Index 
router.get("/", (req,res)=>{
    res.send("GET for users");
});

//Show
router.get("/:id", (req,res)=>{
    res.send("GET for  show users id");
});

//POST 
router.post("/:id", (req,res)=>{
    res.send("POST for users");
});

//DELETE 
router.delete("/:id", (req,res)=>{
    res.send("delete for user id");
});

module.exports = router;