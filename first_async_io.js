var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFile(path, 'utf8', function(err,data){
  var lines = data.split("\n");
  var lineCount = lines.length - 1;
  console.log(lineCount);
});
