const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({
  dest : 'uploads',
  limits : {
    fileSize : 1000000
  },
  fileFilter(req, file, cb){
    if(!file.originalname.endsWith('.pdf')){
      return cb("Error")
    }

    cb(undefined, true);
  }
})

app.post('/upload', upload.single('avatar'), (req, res) => {
  res.send()
})

app.listen(3000, function() {
  console.log("Listening on port 3000");
})
