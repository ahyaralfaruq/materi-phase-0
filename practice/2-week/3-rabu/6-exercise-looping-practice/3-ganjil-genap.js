var total = 100;
var counter = 1;

while(counter <= total) {

  if(counter % 2 === 0) {
    console.log("GENAP");
  } else {
    console.log("GANJIL")
  }

  counter++;
}

for(var i = 1; i <= 100; i += 2){
  if(i % 3 === 0) {
    console.log(i + " KELIPATAN 3");
  } else {
    console.log(i)
  }
}

for(var j = 1; j <= 100; j += 5){
  if(j % 6 === 0) {
    console.log(j + " KELIPATAN 6");
  } else {
    console.log(j)
  }
}

for(var k = 1; k <= 100; k += 9){
  if(k % 10 === 0) {
    console.log(k + " KELIPATAN 10");
  } else {
    console.log(k)
  }
}