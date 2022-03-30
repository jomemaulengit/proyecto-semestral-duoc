const express = require('express')
const app = express()
const port = 3000
const router = express.Router();
const path = require('path');
const ejs = require('ejs');
require('dotenv').config()
const rootdir = process.env.DIRNAME

// DOWNLOAD FILE
// app.get('/',function(req,res) {
//     res.sendFile('C:/Users/DUOC/Desktop/proyecto-semestral-duoc/front/src/homepage.ejs');
//   });

// app.get('/', (req, res) => {
//     res.send(rootdir+'src/index.ejs')
//   })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// router.get('/',function(req,res){
//     res.sendFile(path.join(rootdir+'src/index.ejs'));
//     //rootdir : It will resolve to your project folder.
//   });

app.set("view engine", "ejs");
  
//add the router
app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log('Running at Port 3000');
