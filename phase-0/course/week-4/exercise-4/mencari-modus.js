function cariModus(arr) {

    let s = arr.sort(function(a,b){
        return a - b
    })

    let temp = []
    let result = 0

    for (let i = 0; i <= s.length - 1; i++) {
        
        if (s[i] === s[i + 1]) {
            temp.push(s[i])
        }
        
    }

    if(temp.length === 0 || temp[0] === temp[1]) {
        result = -1
    } else {
        result = temp[0]
    }

    return result
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1