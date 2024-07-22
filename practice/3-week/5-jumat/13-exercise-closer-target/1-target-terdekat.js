function targetTerdekat(arr) {
  // you can only write your code here!

  // in the first case, the o string lies in the second index (queue 3)
  // and x string that closer to o string lies in fifth index (queue 6)
  // then we have to create temps to input both of index between o and x string
  let o = -1
  let x = -1

  // use looping to get all value of array
  for(let i = 0; i < arr.length; i++) {
    // use condition to check is there value is o string or not
    // and check is value of temp x is -1 or bigger than i
    // that thing for checking that we can get index of o string
    if(arr[i] === "o" && i > x) {
      o = i
    } else if(arr[i] === "x" && i > o) {
      x = i
    }

    // this condition will execute to stop looping
    // because we have found what we need.
    // for this case, first index of o and first index x that closer.
    if(x !== -1 && o !== -1) {

      // handle the other case if x - o is negative value using Math.abs()
      return Math.abs(x - o)
    }
  }

  return 0
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2