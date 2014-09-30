var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFileSync(path);
var str = buf.toString();
console.log(buf);
var lines = str.split("\n");
console.log(lines);
var lineCount = lines.length - 1;
console.log(lineCount);
