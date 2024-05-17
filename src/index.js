import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})

connectDB()



//it wil be done in anoter file db and called ere
// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//     }

//     catch(error){
//         console.log("ERROR",error);
//         throw err
//     }
// })()