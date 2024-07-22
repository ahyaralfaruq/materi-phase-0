function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  const point = arr[1] / arr[0]
  let isTrue = true

  for(let i = 1; i < arr.length; i++) {
    if(Math.floor(arr[i] / arr[i - 1]) === point) {
      continue
    }

    isTrue = false
  }

  return isTrue
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false