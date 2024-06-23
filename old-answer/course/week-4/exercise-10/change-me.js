function changeMe(arr) {

    let result = ""

    if (arr.length === 0) {
        result = ""
    }

    for (let i = 0; i < arr.length; i++) {
        
        let nama = `${arr[i][0]} ${arr[i][1]}`
        let umur = arr[i][3] === undefined || arr[i][3] === 0 || arr[i][3] > 2022 ? `Invalid Birth Year` : 2022 - arr[i][3]

        let temp = {}

        temp.firstName = arr[i][0]
        temp.lastName = arr[i][1]
        temp.gender = arr[i][2]
        temp.age = umur
        
        console.log(i+1, nama)
        console.log(temp)
    }
}



// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""