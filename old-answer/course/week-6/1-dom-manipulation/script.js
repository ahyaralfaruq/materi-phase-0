let getH1 = document.getElementById("fill-me");
let getAllp = document.getElementsByClassName("change-all-of-me");
let getH2 = document.getElementsByTagName("h2");

getH1.innerHTML = "HALO!";

for (let i = 0; i < getAllp.length; i++) {
   getAllp[i].innerHTML = "HALO JUGA!";
}

getH2[0].innerHTML = "Apa Kabar!";
