const express = require('express')
const app = express()
const router = express.Router();
const path = require('path');
require('dotenv').config()
const rootdir = process.env.DIRNAME
process.env.PWD = process.cwd()
const cors = require('cors')

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
// MIDDLEWARES
app.use(cors());
app.use(express.static(process.env.PWD + '/public'));

router.get('/', function (req, res) {
  res.render(path.join(rootdir + 'src/index.ejs'));
});
router.get('/register', function (req, res) {
  res.render(path.join(rootdir + 'src/pages/register.ejs'));
});
router.get('/forgot', function (req, res) {
  res.render(path.join(rootdir + 'src/pages/forgot.ejs'));
});
router.get('/cart', function (req, res) {
  res.render(path.join(rootdir + 'src/pages/cart.ejs'));
});
router.get('/myorder', function (req, res) {
  res.render(path.join(rootdir + 'src/pages/orderTracking.ejs'));
});
router.get('/history', function (req, res) {
  res.render(path.join(rootdir + 'src/pages/history.ejs'));
});
router.get('/details', function (req, res) {
  res.render(path.join(rootdir + 'src/pages/details.ejs'));
});
router.get('/test', function (req, res) {
  res.render(path.join(rootdir + 'src/pages/test.ejs'));
});

app.set("view engine", "ejs");

//add the router
app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log('Running at Port 3000');
