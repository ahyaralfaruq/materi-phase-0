let mainForm = document.getElementById("main-form");

function checkLengthPassword(foo) {
   return foo.length >= 8 ? true : false;
}

function checkSpaceInput(foo) {
   return foo.trim() !== "" || foo.length !== 0 ? true : false;
}

function checkSameInput(foo, bar) {
   return foo === bar ? true : false;
}

function checkEmail(foo) {
   let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   return foo.match(regex) ? true : false;
}

mainForm.onsubmit = function () {
   let username = document.getElementById("username").value;
   let password = document.getElementById("password").value;
   let retypePassword = document.getElementById("confirm-password").value;
   let email = document.getElementById("email").value;
   let retypeEmail = document.getElementById("confirm-email").value;

   // check invalid value

   // check general required

   if (
      checkSpaceInput(username) !== true ||
      checkSpaceInput(password) !== true ||
      checkSpaceInput(retypePassword) !== true ||
      checkSpaceInput(email) !== true ||
      checkSpaceInput(retypeEmail) !== true
   ) {
      return alert("Input field tidak boleh kosong !");
   }

   // check username
   if (username.length < 3) {
      return alert("Username minimal 3");
   }

   // check password
   if (checkLengthPassword(password) !== true) {
      return alert("Password minimal 8 karakter !");
   } else if (checkSameInput(password, retypePassword) !== true) {
      return alert("Password validasi tidak sama !");
   }

   // check email
   if (checkEmail(email) !== true) {
      return alert("karakter yang dimasukkan bukan alamat email !");
   } else if (checkSameInput(email, retypeEmail) !== true) {
      return alert("Email validasi tidak sama !");
   } else if (email.split("@")[0].length < 3) {
      return alert("email tidak ditemukan !");
   }

   let obj = {
      username: username,
      password: password,
      email: email,
   };

   let convertObj = JSON.stringify(obj);

   return alert(convertObj);
};
