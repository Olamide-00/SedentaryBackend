const express = require("express");
const mongoose = require("mongoose")
const UserRouter = require("./routes/userRoute")





const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


app.listen(port, () => console.log("server connected"));
const dbUrl = "mongodb+srv://olamide:olamide@user.wb4oi.mongodb.net/?retryWrites=true&w=majority&appName=SedentaryApp"
mongoose.connect(dbUrl)
    .then(() => console.log("database connected"))
    .catch((error) => console.log("error connecting to database", error))




app.use(UserRouter);
