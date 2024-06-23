function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    let result = []

    if (arrPenumpang.length === 0) {
        return []
    }
    
    for (let i = 0; i < arrPenumpang.length; i++) {
        
        let temp = {
            penumpang : "",
            naikDari : "",
            tujuan : "",
            bayar : 0
        }

        for (let j = 0; j < arrPenumpang[i].length; j++) {

            temp.penumpang = arrPenumpang[i][0]
            temp.naikDari = arrPenumpang[i][1]
            temp.tujuan = arrPenumpang[i][2]

            let jarak = 0
            let indexDari = -1
            let indexKe = -1
            
            for (let k = 0; k < rute.length; k++) {
                

                if (rute[k] === arrPenumpang[i][1]) {
                    indexDari = k + 1
                }

                if (rute[k] === arrPenumpang[i][2]) {
                    indexKe = k + 1
                }

                if (indexDari !== -1 && indexKe !== -1) {
                    jarak = Math.abs(indexDari - indexKe)
                }

                // console.log(`dari : ${indexDari}`)
                // console.log(`ke : ${indexKe}`)
                
            }
            
            // console.log(jarak)

            temp.bayar = jarak * 2000
            
        }

        result.push(temp)
        
    }

    // console.log(result)

    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]