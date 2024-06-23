function kingIsInCheck(chessboard) {
    // let data = {
    //     king : '♔',
    //     queen : '♛',
    //     bishop : '♝',
    //     knight : '♞',
    //     rook : '♜',
    //     pawn : '♟',
    // }

    let data = []
    let result

    for (let i = 0; i < chessboard.length; i++) {
        
        let cek = chessboard[i]
        
        for (let j = 0; j < cek.length; j++) {
            
            if (cek[j] !== " ") {
                let tempObj = {
                    bidak : cek[j],
                    barisX : j,
                    barisY : i
                }

                data.push(tempObj)
            }
            
        }

    }

    // console.log(data)

    if (data.length < 2) {
        return false
    }

    for (let i = 0; i < data.length; i++) {
        
        let kings = data[i].bidak === '♔' ? data[i] : ''

        for (let j = 0; j < data.length; j++) {
            
            if (data[j].bidak !== kings.bidak && kings !== "") {
                // console.log(data[j], j, data[j].bidak)

                let fighter = data[j]

                if (fighter.bidak === '♟' && (kings.barisY - fighter.barisY) === 1 && (fighter.barisX === kings.barisX - 1 || fighter.barisX === kings.barisX + 1)) {
                    result = true
                } else if ((fighter.bidak === '♛' || fighter.bidak === '♜') && (fighter.barisX === kings.barisX || fighter.barisY === kings.barisY) && (fighter.barisX !== data[j+1].barisX || fighter.barisY !== data[j+1].barisY)) {
                    result = true
                }
            }
            
        }
    }

    // console.log(result)

    return result

}


const chessboard = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '♟', ' ', ' ', ' ', ' '],
    [' ', ' ', '♔', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];

console.log(kingIsInCheck(chessboard)) // true

const chessboard2 = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '♔', ' ', ' ', '♜', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];

console.log(kingIsInCheck(chessboard2)) // true

// const chessboard3 = [
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '♔', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     ['♞', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
// ];

// console.log(kingIsInCheck(chessboard3)) // true

const chessboard4 = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '♛', ' ', '♔', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];

console.log(kingIsInCheck(chessboard4)) // true

// const chessboard5 = [
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', '♔', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
// ];

// console.log(kingIsInCheck(chessboard5)) // false


// const chessboard6 = [
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     ['♛', ' ', ' ', '♞', ' ', ' ', ' ', '♛'],
//     [' ', ' ', ' ', '♔', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
// ];

// console.log(kingIsInCheck(chessboard6)) // false

//     const chessboard7 = [
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     ['♜', ' ', '♝', '♔', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
// ];

// console.log(kingIsInCheck(chessboard7)) // false