$('#uploadButton').on('click', function(){
  $('#uploadInput').click()
})

$('#uploadInput').on('change', function(){
  var files = $(this).get(0).files;
  var formData = new FormData();
  var file = files[0];
  formData.append('uploads[]', file, file.name);

  console.log("Change successfully detected");

  $.ajax({
    url: '/upload',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function(data){
        console.log('upload successful!');
    }
  });
});
