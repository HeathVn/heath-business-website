import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import servicesRoutes from './routes/services.js'

const app = express();




app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/services', servicesRoutes);

const URL = "mongodb+srv://hstyles:Spikenard@cluster0.neei7.mongodb.net/hvBusiness";
//const PORT = process.env.PORT || 5000
//connect to mongoose
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> app.listen(port, host, ()=> console.log("Server running on port : ${PORT} ")))
  .catch((error)=> console.log(error.message));

//mongoose.set('useFindAndModify',false);