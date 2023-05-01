const dotenv= require("dotenv")
dotenv.config()
const url=process.env.URL

const productDB=[
    {
        id:"1",
        name:"Black Mach & Mach Hills",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol",
        price:60.00,
        discount:5,
        productImage:`${url}/images/mach1.jpg`,
        inStock:100
    },
    {
        id:"2",
        name:"Brown Fendi Two Piece",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor",
        price:50.00,
        discount:0,
        productImage:`${url}/images/2fendi1.jpg`,
        inStock:10
    },
    {
        id:"3",
        name:"Black Zara Slide",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor",
        price:40.00,
        discount:0,
        productImage:`${url}/images/slide1.jpg`,
        inStock:4
    },
    {
        id:"4",
        name:"Zara Black Leather",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol",
        price:100.00,
        discount:10,
        productImage:`${url}/images/zarablack1.jpg`,
        inStock:30
    },
    {
        id:"5",
        name:"Red Mach & Mach Hills",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol",
        price:60.00,
        discount:5,
        productImage:`${url}/images/mach2.jpg`,
        inStock:40
    },
    {
        id:"6",
        name:"Pink Zara Slide",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        price:50.00,
        discount:0,
        productImage:`${url}/images/slide2.jpg`,
        inStock:8
    },
    {
        id:"7",
        name:"Gucci Brown Gown",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol",
        price:60.00,
        discount:2,
        productImage:`${url}/images/browngown.jpg`,
        inStock:20
    },
    {
        id:"8",
        name:"Pink Backless gown",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet",
        price:110.00,
        discount:10,
        productImage:`${url}/images/backlessgown.jpg`,
        inStock:0
    },
    {
        id:"9",
        name:"Blue Zara Slide",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol",
        price:50.00,
        discount:5,
        productImage:`${url}/images/slide3.jpg`,
        inStock:10
    },
    {
        id:"10",
        name:"Sky Blue Designer Gown",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol",
        price:200.00,
        discount:5,
        productImage:`${url}/images/skyblue.jpg`,
        inStock:20
    },
    {
        id:"11",
        name:"Brown Crop-Top",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol",
        price:0.00,
        discount:5,
        productImage:`${url}/images/hdssdhdfghds.jpg`,
        inStock:20
    },
    {
        id:"12",
        name:"black Gucci Two Piece",
        description:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet  Lorem iLorem ipsum dol",
        price:100.00,
        discount:8,
        productImage:`${url}/images/kjgdrewws.jpg`,
        inStock:10
    },
]

// {
//     id:"1",
//     name:"",
//     description:"",
//     price:"",
//     discount:"",
//     productImage:"",
//     inStock:""
// }

module.exports=productDB