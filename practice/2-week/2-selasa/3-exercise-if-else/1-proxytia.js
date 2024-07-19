var nama = "Muhammad Ahyar";
var peran = "penyihir";


if(nama.length === 0) {
  console.log("Nama harus diisi!");
} else if (peran.length === 0) {
  console.log("Halo "+ nama +", Pilih peranmu untuk memulai game!");
} else {

  if(peran === "kesatria") {
    console.log("Selamat datang di Dunia Proxytia, "+ nama);
    console.log("Halo kesatria "+ nama +", kamu dapat menyerang dengan senjatamu!");
  } else if(peran === "tabib") {
    console.log("Selamat datang di Dunia Proxytia, "+ nama);
    console.log("Halo tabib "+ nama +", kamu akan membantu temanmu yang terluka.");
  } else if(peran === "penyihir") {
    console.log("Selamat datang di Dunia Proxytia, "+ nama);
    console.log("Halo penyihir "+ nama +", ciptakan keajaiban yang membantu kemenanganmu!");
  }
}

