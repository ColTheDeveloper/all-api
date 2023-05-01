const userDB = require("../databases/userDB")


// TO GET ALL USERS
const getAllUsers=(req,res)=>{
    if(req.query.totalusers){
        const totalusers=Number(req.query.totalusers)
        
        const users=userDB.slice(0,totalusers)
        res.json(users)
    }else{
        res.json(userDB)
    }   
}


// TO GET A SPECIFIC USER
const getSpecificUser=(req,res)=>{
    const userId=req.params.id
    console.log(userId)
    const user=userDB.find(user=>user.id===userId)
    res.json(user)
}

module.exports={getAllUsers,getSpecificUser}