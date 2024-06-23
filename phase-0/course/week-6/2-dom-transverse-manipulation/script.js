let parentDiv = document.getElementById("eldest-parent");
let aChild = document.getElementById("a-child");
let parentChild = aChild.parentNode.parentNode;
let child1 = parentDiv.children[0];

child1.innerHTML = "Diakses Melalui Eldest Parent";
aChild.previousElementSibling.innerHTML = "Diakses Melalui a Child";
aChild.nextElementSibling.innerHTML = "Diakses Melalui a Child";
parentChild.nextElementSibling.innerHTML = "Diakses Melalui a Child";
