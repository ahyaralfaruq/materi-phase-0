function konversiMenit(menit) {
  // you can only write your code here!
  const hour = Math.floor(menit / 60)
  const minutes = menit % 60
  const minutesToString = minutes.toString()

  let minutesIsString = ""

  if(minutesToString.length === 1) {
    minutesIsString = "0" + minutesToString
  } else {
    minutesIsString = minutesToString
  }

  const result = `${hour}:${minutesIsString}`

  return result
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00