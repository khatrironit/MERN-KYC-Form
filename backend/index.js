const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
//const fileUpload = require('express-fileupload');
const path = require('path');
const port = 5000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      
      const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
      cb(null, newFilename);
    },
  });
  const upload = multer({ storage });


const db = require('./config/mongoose');
const Kyc_collection = require('./models/kyc_schema');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(fileUpload());

app.post('/', upload.single('selectedFile'),(req, res) => {
    console.log('pinged');
    console.log(req.body);

    Kyc_collection.create({
            Name:req.body.Name,
            Address:req.body.Address,
            Email:req.body.Email,
            Phone:req.body.Phone,
            Aadhar:req.body.Aadhar,
            Pan:req.body.Pan,
            Img:req.body.Img
    },function(err,newEntry){
        if(err){
            console.log('error in adding new Entry');
            return;
        }
        console.log(newEntry);
        return res.redirect('back');
    })
      
    //return res.redirect('http://localhost:3000');
});
app.get('/',function(req,res){
    
    return res.send('ronit');
})


app.listen(port,function(err){
    if(err){
        console.log('error',err)
        return;
    }
    console.log('server is running on port ',port);
});