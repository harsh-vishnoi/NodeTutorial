var express = require('express');
var app = express();

var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.post('/upload', function(req, res){
  var form  = formidable.IncomingForm();
  form.multiples = false;

  form.uploadDir = path.join(__dirname, '/uploads');

  form.on('file', function(field, file){
      console.log("Uploading..");

      fs.rename(file.path, './uploads/' + file.name, (err) => {
          if(err)
              throw err;
          console.log("Uploaded successfully!");
      });
  })

  form.on('error', function(err){
    console.log('Error ' + err);
  })

  form.on('end', function(){
    res.end('success');
  })

  form.parse(req);
})

app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
