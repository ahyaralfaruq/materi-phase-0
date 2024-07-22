var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(datas) {
  let result = ""


  for(let i = 0; i < datas.length; i++) {
    const data = datas[i]

    result += `
        Nomor ID: ${data[0]}
        Nama Lengkap: ${data[1]}
        TTL: ${data[2]}
        Hobi: ${data[3]}
      `
  }

  return result
}


console.log(dataHandling(input))