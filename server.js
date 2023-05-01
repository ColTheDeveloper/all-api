const express= require("express")
const cors= require("cors")
const dotenv=require("dotenv")
const bodyParser= require("body-parser")
const userRoutes= require("./routes/userRoutes.js")
const productRoutes=require("./routes/productRoutes.js")
const postRoute= require("./routes/postRoutes.js")

dotenv.config()

const app=express()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(
    cors({})
)
app.use(express.static("public"))
app.use("/images",express.static("images"))

const PORT=process.env.PORT

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.listen(PORT,()=>console.log(`server is on in port ${PORT}`))

app.use("/user", userRoutes);
app.use("/product",productRoutes);
app.use("/post", postRoute);