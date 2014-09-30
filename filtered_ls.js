// My Original Answer
// -----------------------------------
// var fs = require('fs');
// var path = require('path');
// var directory = process.argv[2];
// var fileType = ('.' + process.argv[3]);

// var buf = fs.readdir(directory, function(err, data){
//   for(i = 0; i < data.length; i++){
//     if(path.extname(data[i]) === fileType){
//       console.log(data[i]);
//     }
//   }
// });

// Learnyounode Answer
// -----------------------------------
var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){
  list.forEach(function(file){
    if(path.extname(file) === '.' + process.argv[3])
      console.log(file);
  });
});
