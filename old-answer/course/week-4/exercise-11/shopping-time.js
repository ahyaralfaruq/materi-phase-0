function shoppingTime(memberId, money) {

    let result = {
        memberId : memberId,
        money : money,
        listPurchased : [],
        changeMoney : money
    }
    // let kembalian = 0
    let items = []

    if (memberId === "" || memberId === undefined || money === undefined) {
        result = "Mohon maaf, toko X hanya berlaku untuk member saja"
    }

    if (money === 0 || money < 50000) {
        result = "Mohon maaf, uang tidak cukup"
    }

    if (result.changeMoney > 1500000 || result.changeMoney === 1500000) {
        result.listPurchased.push("Sepatu Stacattu")
        result.changeMoney -= 1500000
    }
    
    if (result.changeMoney > 500000 || result.changeMoney === 500000) {
        result.listPurchased.push("Baju Zoro")
        result.changeMoney -= 500000
    }
    
    if (result.changeMoney > 250000 || result.changeMoney === 250000) {
        result.listPurchased.push("Baju H&N")
        result.changeMoney -= 250000
    }
    
    if (result.changeMoney > 175000 || result.changeMoney === 175000) {
        result.listPurchased.push("Sweater Uniklooh")
        result.changeMoney -= 175000
    }
    
    if (result.changeMoney > 50000 || result.changeMoney === 50000) {
        result.listPurchased.push("Casing Handphone")
        result.changeMoney -= 50000
    }

    return result
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja