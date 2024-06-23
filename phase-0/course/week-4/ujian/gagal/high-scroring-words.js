function high(x){

    let data = {
        "a" : 1,
        "b" : 2,
        "c" : 3,
        "d" : 4,
        "e" : 5,
        "f" : 6,
        "g" : 7,
        "h" : 8,
        "i" : 9,
        "j" : 10,
        "k" : 11,
        "l" : 12,
        "m" : 13,
        "n" : 14,
        "o" : 15,
        "p" : 16,
        "q" : 17,
        "r" : 18,
        "s" : 19,
        "t" : 20,
        "u" : 21,
        "v" : 22,
        "w" : 23,
        "x" : 24,
        "y" : 25,
        "z" : 26
    }
    
    let groupingWords = x.split(" ")
    let temp = []
    let result = ""
    
    for (let i = 0; i < groupingWords.length; i++) {
        
        let numPerWords = {}
        let tempNum = 0

        for (let j = 0; j < groupingWords[i].length; j++) {
            
            let getNumByWord = data[groupingWords[i][j]]

            tempNum += getNumByWord
            
        }

        numPerWords[groupingWords[i]] = tempNum

        temp.push(numPerWords)

    }

    // console.log(temp)

    let counter = temp[0] // {man : 28}
    
    for (let i = 0; i < temp.length; i++) {
        
        
        let word = Object.keys(temp[i])[0]
        let num = temp[i][word]

        // console.log(word,num)

        let tempResult = Object.keys(counter)[0]



        if (counter[tempResult] < num) {
            counter = temp[i]
        }
        
    }

    // console.log(counter)

    return result
}

console.log(high('man i need a taxi up to ubud')); // taxi
console.log(high('what time are we climbing up the volcano')); // volcano
console.log(high('take me to semynak')); // semynak
console.log(high('aa b')); // aa
console.log(high('b aa')); // b
console.log(high('bb d')); // bb
console.log(high('d bb')); // d
console.log(high('aaa b')); // aaa