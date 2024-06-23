function meleeRangedGrouping (str) {
    
    let result = []
    let tempType = []
    let change = str.split(",")

    if (str === "" || str.length  === 0) {
        return []
    }
    
    for (let i = 0; i < change.length; i++) {
        
        let pecah = change[i].split("-")

        for (let j = 0; j < pecah.length; j++) {
            
            if (pecah[j] === "Ranged") {
                tempType.push(pecah[j])
            } else if (pecah[j] === "Melee") {
                tempType.push(pecah[j])
            }
            
        }
        
    }

    let filteringData = Array.from(new Set(tempType))

    for (let i = 0; i < filteringData.length; i++) {
        
        let t = []

        for (let j = 0; j < change.length; j++) {
            
            let p = change[j].split("-")
                
            if (filteringData[i] === "Ranged" && filteringData[i] === p[1]) {
                t.push(p[0])
            } else if (filteringData[i] === "Melee" && filteringData[i] === p[1]) {
                t.push(p[0])
            }
            
        }

        // console.log(t)

        result.push(t)
        
    }

    if (result.length < 2) {
        result.push([])
    }

    return result
}

// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []