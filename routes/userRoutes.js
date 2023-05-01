const express=require("express")
const { getAllUsers, getSpecificUser} = require("../controllers/userController")

const router=express.Router()

router.get("/", getAllUsers);
router.get("/:id",getSpecificUser);



module.exports=router