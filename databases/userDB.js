const dotenv= require("dotenv")
dotenv.config()
const url=process.env.URL
const userDB=[
    {
        id:"1",
        username:"JohnDoe123",
        firstName:"John",
        lastName:"Doe",
        avatar:`${url}/images/profile1.png`,
        phoneNumber:"+2348153569631",
        emailAddress:"JohnDoe123@fakemail.com",
        gender:"male",
        country:"Nigeria"
    },
    {
        id:"2",
        username:"Mary018",
        firstName:"Mary",
        lastName:"Robert",
        avatar:`${url}/images/34-56-24mv.jpg`,
        phoneNumber:"+2349045396712",
        emailAddress:"mary018robert@fakemail.com",
        gender:"female",
        country:"Nigeria"
    },
    {
        id:"3",
        username:"DeSuperMan",
        firstName:"Clark",
        lastName:"Kent",
        avatar:`${url}/images/gk78d4s89.jpg`,
        phoneNumber:"+14560943467",
        emailAddress:"supes083@fakemail.com",
        gender:"male",
        country:"United State"
    },
    {
        id:"4",
        username:"Loveable007",
        firstName:"Loveth",
        lastName:"August",
        avatar:`${url}/images/IMG_20230501_153817.jpg`,
        phoneNumber:"+444359922123",
        emailAddress:"lovable091@gmal.com",
        gender:"female",
        country:"United Kingdom"
    },
    {
        id:"5",
        username:"Dr.Sunrise",
        firstName:"Sunday",
        lastName:"Oladeji",
        avatar:`${url}/images/IMG_20230501_152933.jpg`,
        phoneNumber:"+2349129564844",
        emailAddress:"olasunrise@gmail.com",
        gender:"male",
        country:"Nigeria"
    },
    {
        id:"6",
        username:"Pheelz",
        firstName:"Afeez",
        lastName:"Adewale",
        avatar:`${url}/images/IMG_20230501_153806.jpg`,
        phoneNumber:"+23492412094556",
        emailAddress:"pheeliwalex@gmail.com",
        gender:"male",
        country:"Nigeria"
    },
    {
        id:"7",
        username:"Iambatman",
        firstName:"Bruce",
        lastName:"Wayne",
        avatar:`${url}/images/IMG_20230501_153218.jpg`,
        phoneNumber:"+17493450952",
        emailAddress:"gothamknight@gmail.com",
        gender:"Male",
        country:"United State"
    },
    {
        id:"8",
        username:"Rue_baby",
        firstName:"Rue",
        lastName:"Mia",
        avatar:`${url}/images/IMG_20230501_153520.jpg`,
        phoneNumber:"+443457323121",
        emailAddress:"miababy112@yahoo.com",
        gender:"female",
        country:"United Kingdom"
    },
    {
        id:"9",
        username:"Deeyah",
        firstName:"Rodiyat",
        lastName:"Arinola",
        avatar:`${url}/images/IMG_20230501_153142.jpg`,
        phoneNumber:"+2348134575431",
        emailAddress:"deeyah331@gmail.com",
        gender:"female",
        country:"Nigeria"
    },
    {
        id:"10",
        username:"wonderwoman",
        firstName:"Diana",
        lastName:"Prince",
        avatar:`${url}/images/IMG_20230501_153847.jpg`,
        phoneNumber:"+18853022232",
        emailAddress:"wonderstrong@gmail.com",
        gender:"female",
        country:"United State"
    },
]

// {
//     id:"4",
//     username:"",
//     firstName:"",
//     lastName:"",
//     avatar:"",
//     phoneNumber:"",
//     emailAddress:"",
//     gender:"",
//     country:""
// },

module.exports=userDB;