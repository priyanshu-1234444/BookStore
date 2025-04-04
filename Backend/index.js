import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
dotenv.config();
const PORT=process.env.PORT || 4000;
// connect to mongoDB
mongoose.connect(process.env.MongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(() => {
    console.log('Successfully connected to the database');
 }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
// defining routes
app.use("/book",bookRoute)
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})