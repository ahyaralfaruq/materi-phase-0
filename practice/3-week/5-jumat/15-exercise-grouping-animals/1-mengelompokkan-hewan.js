function groupAnimals(animals) {
  // you can only write your code here!
  const abjad = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let isStop = 0
  const result = []

  for(let i = 0; i < abjad.length; i++) {
    let temp = []

    for(let j = 0; j < animals.length; j++) {
      const firstWord = animals[j].charAt(0)

      if(firstWord === abjad[i]) {
        temp.push(animals[j])
        isStop++
      }
    }

    if(temp.length !== 0) {
      result.push(temp)
    } else {
      continue
    }

    if(isStop === animals.length) {
      break
    }    
  }

  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]