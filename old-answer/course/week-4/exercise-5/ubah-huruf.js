function ubahHuruf(kata) {
    
    let d = "abcdefghijklmnopqrstuvwxyz"
    let result = ""

    for (let i = 0; i < kata.length; i++) {
        
        for (let j = 0; j <= d.length - 1; j++) {
            
            if(kata[i] === d[j]) {
                result += d[j + 1]
            }
            
        }

    }

    return result
}


  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu