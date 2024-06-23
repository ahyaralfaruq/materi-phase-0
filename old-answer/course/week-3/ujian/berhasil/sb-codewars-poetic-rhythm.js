// Poetic rhythm

// Poetry is often characterized by figurative language and rhyming patterns, and almost always by rhythm. Let's dabble with prosody, that is to say : the study of rhythm in poetry.

// The smallest rhythmic unit is called a meter. There are several kinds of meters, depending on the combination of unstressed (or short) syllables and long (or stressed) syllables.

// In prosody you usually write rythm using symbols to differentiate between long and short syllables.

// Examles of symbols for short syllables : "." or "x" or "*"
// Examples of symbols for long syllables: "/" or "_"
// Poetic meters considered in this kata:
// We will only study a few dissyllables, which are meters composed of two syllables.

// Examples (name, pattern):

// iamb:    . _
// trochee:    _ .
// spondee:    _ _
// pyrrhic:    . .

// The problem:
// Usually, when you write down the rhythm, you choose one convention and you stick to it, ie, all your short syllables will be noted as "."

// But in this kata we will work with the notes of a student that wasn't very careful when they transcribed prosody... Hence you will have to deal with cases such as ".x" which will have to be identified as "pyrrhic" (short, short).

// You will be given a string, which represents a meter. The argument will never be an empty string.
// You will also be given an object with a "short" property, containing an array of all sorts of characters representing short syllabes, and a "long" property, listing all characters representing a long syllable.
// Task
// Your job is to identify the input string - which kind of meter is it? possible answers are "iamb", "trochee", "spondee" or "pyrrhic".
// If the given string includes any character that is not a prosodic symbol, return "What is this?"
// If the given string is entirely prosodic symbols, but it is too short or too long, return "Not a dissyllable."


function identifyMeter(str) {
    let syllables = {
        short : [".","*","x"],
        long : ["/","_"]
    }

    let result = ""

    let tempHash = []
    
    for (let i = 0; i < str.length; i++) {

        let tempData = ""
        
        if(str[i] === syllables.short[0] || str[i] === syllables.short[1] || str[i] === syllables.short[2]) {

            tempData += "short"

        } else if (str[i] === syllables.long[0] || str[i] === syllables.long[1]) {

            tempData += "long"
        }
        
        tempHash.push(tempData)
    }

    let convData = tempHash.toString()
    
    if(convData === "short,short") {
        result = "pyrrhic"
    } else if (convData === "short,long") {
        result = "iamb"
    } else if (convData === "long,long") {
        result = "sponde"
    } else if (convData === "long,short") {
        result = "trochee"
    } else {

        let test = convData.split(",")
        
        if((test.length - 1) > 2) {
            result = "Not a dissyllable"
        } else {
            result = "what is this ?"
        }
    }

    return result
}

console.log(identifyMeter(".x..x..x..x")) // Not a dissyllable
console.log(identifyMeter("as")) // what is this ?
console.log(identifyMeter("./")) // iamb
console.log(identifyMeter("/_")) // spondee
console.log(identifyMeter("_*")) // trochee
console.log(identifyMeter(".x")) // pyrrhic