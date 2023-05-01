const postDB= require("../databases/postDB.js")

// GET ALL POST
const getAllPost=(req,res)=>{
    if(req.query.totalpost){
        const totalpost=Number(req.query.totalpost) 
        const posts=postDB.slice(0,totalpost)
        res.json(posts)
    }else{
        res.json(postDB)
    }   
}

//GET A SPECIFIC POST
const getSpecificPost=(req,res)=>{
    const postId=req.params.id
    const post=postDB.find(post=>post.id===postId)
    res.json(post)
}

module.exports= {getAllPost, getSpecificPost}