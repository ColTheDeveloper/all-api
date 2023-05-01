const productDB= require("../databases/productDB")

// Get ALL PRODUCT
const getAllProduct=(req,res)=>{
    if(req.query.totalproducts){
        const totalproducts=Number(req.query.totalproducts) 
        const products=productDB.slice(0,totalproducts)
        res.json(products)
    }else{
        res.json(productDB)
    }   
}

// GET A SPECIFIC PRODUCT
const getSpecificProduct=(req,res)=>{
    const productId=req.params.id
    const product=productDB.find(product=>product.id===productId)
    res.json(product)
}

module.exports={getAllProduct,getSpecificProduct}