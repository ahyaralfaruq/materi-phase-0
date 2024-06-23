console.log("LAUNDRY DAY");

// =========================================================================== LAUNDRY DAY

// diketahui Foxie mencuci pakaian sebanyak 20.
// mesin cuci akan menyala setelah semua pakaian jika masuk kedalam mesin cuci.

// pakaian foxie yang ingin dicuci
let pakaian = 20;

// menghitung 1 per 1 dari total jumlah pakaian foxie
for(let i = 1; i <= pakaian; i++) {
    console.log(`pakaian foxie ke ${i}`)

    // kondisi jika semua pakaian telah masuk ke mesin cuci
    if(i === pakaian) {
        console.log("mesin cuci dinyalakan")
    }
}
