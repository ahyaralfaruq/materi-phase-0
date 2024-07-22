function dataHandling2(array) {
  array.splice(1, 1, "Roman Alamsyah Elsharawy")
  array.splice(2, 1, "Provinsi Bandar Lampung")
  array.splice(4, 1, "Pria")
  array.splice(5, 0, "SMA Internasional Metro")

  console.log(array)

  const tanggal = array[3].split("/")

  let bulan = tanggal[1]

  switch(bulan) {
    case "01" || 1:
      bulan = "Januari"
      break
    case "02" || 2:
      bulan = "Februari"
      break
    case "03" || 3:
      bulan = "Maret"
      break
    case "04" || 4:
      bulan = "April"
      break
    case "05" || 5:
      bulan = "Mei"
      break
    case "06" || 6:
      bulan = "Juni"
      break
    case "07" || 7:
      bulan = "Juli"
      break
    case "08" || 8:
      bulan = "Agustus"
      break
    case "09" || 9:
      bulan = "September"
      break
    case "10" || 10:
      bulan = "Oktober"
      break
    case "11" || 11:
      bulan = "November"
      break
    case "12" || 12:
      bulan = "Desember"
      break
    default:
      bulan = "Bulan hanya ada 12"
      break
  }

  console.log(bulan)

  const sortingArray = tanggal.sort(function(a,b) {
    return b - a
  })

  console.log(sortingArray)

  const fixingTanggal = tanggal.join("-")

  console.log(fixingTanggal)

  const nameLimit = array[1].slice(0, 14)

  console.log(nameLimit)

}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);