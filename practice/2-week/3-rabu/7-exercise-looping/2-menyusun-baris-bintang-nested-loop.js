var rows2 = 5;
var temp = "";

for(var i = 0; i < rows2; i++) {
  for(var j = 0; j < rows2; j++) {
    temp += "*";
  }
  if(i !== rows2 - 1) {
    temp += "\n";
  }
}

console.log(temp);