// Line up :

// Task :
// There are several units in a line, out of your sight. You will be given a list of hints (a list or array of strings) that indicates who is next to who in the queue, and you have to rebuild the queue of people, in appropriate order.

// Example :
// With these hints,

// ["white has black on his left","red has green on his right", "black has green on his left"]

// you should reduce that the queue is the following:

// ["red","green","black","white"]

// Notes:

// It is always possible to reduce the complete order in the queue. The hints can be of two different forms,  such as "white has black on his left", or "black has white on his right". Each queue has at least two units.


function lineUp(arr) {

    let temp = []
    
    for (let i = 0; i < arr.length; i++) {
        
        let splitingStr = arr[i].split(" ")
        
        splitingStr.splice(3)

        splitingStr.splice(1,1)

        for (let j = 0; j < splitingStr.length; j++) {
            
            temp.push(splitingStr[j])
            
        }

    }

    let result = Array.from(new Set(temp))

    return result.sort()
}



console.log(lineUp(["white has black on his left","red has green on his right", "black has green on his left"]))