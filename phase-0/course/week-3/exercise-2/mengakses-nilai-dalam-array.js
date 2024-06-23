// Directions :

// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

// Example : 

// //input "hello world!"
// //output
// "!dlrow olleh"

// Hints :

// Untuk membantumu mengerjakan tantangan ini, gunakanlah properti length pada sebuah array yang akan memberikan panjang dari array-nya. Ingat, indeks sebuah array pada JavaScript dimulai dari 0. Untuk tugas ini, kamu wajib menggunakan looping dan dilarang menggunakan sintaks .reverse!


// my code :

function balikString(strings) {
    let str = ""

    for(let i = strings.length - 1; i >= 0; i--) {
        str += strings[i]
    }

    return str
}

console.log(balikString("ayar"))

