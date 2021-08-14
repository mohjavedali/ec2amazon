const express =  require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
//connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology:true, userNewUrlParser:true},
    ()=>console.log('connected to db.')
);
//imports route
const productsRoutes = require("./routes/products");
//middle parser
app.use(cors());
app.use(express.json());
//route middlewares
app.use("/api/products", productsRoutes);

app.listen(4000, ()=>{ console.log("server up and running on port 4000!")})

