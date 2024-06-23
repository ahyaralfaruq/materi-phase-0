function urutkanAbjad(str) {

    let result
    let temp = []

    for (let i = 0; i < str.length; i++) {
        
        temp.push(str[i])
        
    }

    let urut = temp.sort()

    result = urut.join("")

    return result
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'