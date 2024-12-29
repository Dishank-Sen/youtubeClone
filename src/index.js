import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: '.env'
})

connectDB()
.then(
    app.listen(process.env.PORT || 8000, () => {
        console.log(`\n Server running on port ${process.env.PORT || 8000}`)
    })
)
.catch((error) => {
    console.error("ERROR FORM MONGODB : ", error);
    process.exit(1);
})