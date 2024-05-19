import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";
   
dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
     app.on("errror", (error) => {
        console.log("ERRR: ", error);
        throw error
    }) 
    app.listen(process.env.PORT || 80000)
    console.log(`Server is runnin at port :${process.env.PORT}`);
   

})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err);
})


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