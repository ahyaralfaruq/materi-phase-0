// Directions :
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// var hari = 21; var bulan = 1; var tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

// Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi
// var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)


// my code :


var tanggal = 1
var bulan = 5
var tahun = 1899

if(tanggal > 31 || tanggal < 1) {
    console.log(`Tanggal ${tanggal} tidak ada dalam kalender!`)
} else {

    if(tahun < 1900 || tahun > 2200) {
        console.log(`Tahun ${tahun} tidak dapat dimuat dalam kalender!`)
    } else {

        switch (bulan) {
            case 1 :
                bulan = 'Januari'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
            case 2 :
                bulan = 'Februari'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
            case 3 :
                bulan = 'Maret'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
            case 4 :
                bulan = 'April'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
            case 5 :
                bulan = 'Mei'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
            case 6 :
                bulan = 'Juni'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
            case 7 :
                bulan = 'Juli'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
            case 8 :
                bulan = 'Agustus'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
            case 9 :
                bulan = 'September'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
            case 10 :
                bulan = 'Oktober'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
            case 11 :
                bulan = 'November'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
            case 12 :
                bulan = 'Desember'
                console.log(`${tanggal} ${bulan} ${tahun}`)
                break;
        
            default:
                console.log(`bulan ke ${bulan} tidak ada dalam kalender!`)
                break;
        }

    }
    
}
