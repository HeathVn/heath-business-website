import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import servicesRoutes from './routes/services.js'
import path from 'path';

const __dirname = path.resolve();

const app = express();




app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://heath-business-react-app.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))


app.use('/services', servicesRoutes);

const URL = "mongodb+srv://hstyles:Spikenard@cluster0.neei7.mongodb.net/hvBusiness";
//const PORT = process.env.PORT || 5000
//connect to mongoose
const host = '0.0.0.0';
const port = process.env.PORT || 5000;



//const path = require('path');

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> app.listen(port,host,()=> console.log("Server running on port : ${port} ")))
  .catch((error)=> console.log(error.message));

//mongoose.set('useFindAndModify',false);