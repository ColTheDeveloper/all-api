const express=require("express")
const { getAllPost, getSpecificPost } = require("../controllers/postController")

const router=express.Router()

router.get("/", getAllPost)
router.get("/:id", getSpecificPost)

module.exports=router