const dotenv= require("dotenv")
dotenv.config()

const url=process.env.URL

const postDB=[
    {
        id:"1",
        avatar:`${url}/images/gk78d4s89.jpg`,
        username:"kassiey",
        name:"T.J",
        postImage:`${url}/images/postTJ.jpg`,
        postContent:"what do you see?",
        likes:23,
        comment:10
    },
    {
        id:"2",
        avatar:`${url}/images/IMG_20230501_152905.jpg`,
        username:"msavage",
        name:"M Savage",
        postImage:`${url}/images/IMG_20230501_151814.jpg`,
        postContent:"Own the Day",
        likes:34,
        comment:78
    },
    {
        id:"3",
        avatar:`${url}/images/34-56-24mv.jpg`,
        username:"deedeveloper",
        name:"COL The Developer",
        postImage:`${url}/images/IMG_20230501_152121.jpg`,
        postContent:"My brain cells trying to come up with a meaningful variable name",
        likes:344,
        comment:200
    },
    {
        id:"4",
        avatar:`${url}/images/9776jghgd467.jpg`,
        username:"pxseiidon",
        name:"Marcel",
        postImage:`${url}/images/brrzzkdhjghjkd.jpg`,
        postContent:"You are crazy,I Love you",
        likes:53,
        comment:23
    },
    {
        id:"5",
        avatar:`${url}/images/IMG_20230501_153008.jpg`,
        username:"gos_world",
        name:"GoS World",
        postImage:`${url}/images/IMG_20230501_151912.jpg`,
        postContent:"Who has had the better season?",
        likes:1,
        comment:0
    },
    {
        id:"6",
        avatar:`${url}/images/IMG_20230501_152725.jpg`,
        username:"kozil2",
        name:"ozilIsOnline",
        postImage:`${url}/images/IMG_20230501_152422.jpg`,
        postContent:"Which Trio comes to mind first?",
        likes:28,
        comment:96
    },
    {
        id:"7",
        avatar:`${url}/images/IMG_20230501_153218.jpg`,
        username:"steadydey",
        name:"Steady Boy",
        postImage:`${url}/images/IMG_20230501_152138.jpg`,
        postContent:"A frame from the mario movie worthy as a wallpaper",
        likes:100,
        comment:34
    },
    {
        id:"8",
        avatar:`${url}/images/IMG_20230501_153755.jpg`,
        username:"fresshhyyy",
        name:"Invisible",
        postImage:`${url}/images/IMG_20230501_153051.jpg`,
        postContent:"Me Rn",
        likes:596,
        comment:300
    },
    {
        id:"9",
        avatar:`${url}/images/IMG_20230501_152832.jpg`,
        username:"elonmusk",
        name:"Elon Musk",
        postImage:`${url}/images/IMG_20230501_152737.jpg`,
        postContent:"Home",
        likes:2,
        comment:2
    },
    {
        id:"10",
        avatar:`${url}/images/IMG_20230501_153817.jpg`,
        username:"loveable007",
        name:"Loveth",
        postImage:`${url}/images/IMG_20230501_153831.jpg`,
        postContent:"Love this",
        likes:100,
        comment:40
    },
    {
        id:"11",
        avatar:`${url}/images/IMG_20230501_153520.jpg`,
        username:"BzingersVine",
        name:"Bzingers",
        postImage:`${url}/images/IMG_20230501_153325.jpg`,
        postContent:"Sheldon Cooper savage replies",
        likes:100,
        comment:40
    },
]

module.exports= postDB;