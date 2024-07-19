var rows3 = 5;
var temp = "";

for(var i = 0; i < rows3; i++) {
  for(var j = 0; j <= i; j++) {
    temp += "*";
  }

  if(i < rows3 - 1) {
    temp += "\n";
  }
}

console.log(temp);