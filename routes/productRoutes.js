const express= require("express")
const { getAllProduct, getSpecificProduct } = require("../controllers/productController")

const router=express.Router()

router.get("/", getAllProduct)
router.get("/:id",getSpecificProduct)


module.exports=router