var elems = process.argv;
var sum = 0;

for(var i=2; i<elems.length; i++){
  sum += Number(elems[i]);
}

console.log(sum);
