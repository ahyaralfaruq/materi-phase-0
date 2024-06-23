function cariMedian(arr) {
    
    let result

    if(arr.length % 2 === 1) {
        result = arr[Math.floor(arr.length/2)]
    } else {
        result = (arr[Math.floor(arr.length/2) - 1] + arr[Math.floor(arr.length/2)]) / 2
    }

    return result
}
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5