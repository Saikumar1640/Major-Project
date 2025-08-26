const express = require("express");
const router = express.Router();

//Index - users
router.get("/", (req,res)=>{
    res.send("GET for users");
});

//Show - users
router.get("/:id", (req,res)=>{
    res.send("GET for  show users id");
});

//POST - users
router.post("/:id", (req,res)=>{
    res.send("POST for users");
});

//DELETE - users
router.delete("/:id", (req,res)=>{
    res.send("delete for user id");
});

module.exports = router;