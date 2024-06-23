function changeVocals(str) {
   let result = [];

   for (let i = 0; i < str.length; i++) {
      if (str[i] === `a`) {
         result.push(`b`);
      } else if (str[i] === `A`) {
         result.push(`B`);
      } else if (str[i] === `i`) {
         result.push(`j`);
      } else if (str[i] === `I`) {
         result.push(`J`);
      } else if (str[i] === `u`) {
         result.push(`v`);
      } else if (str[i] === `U`) {
         result.push(`V`);
      } else if (str[i] === `e`) {
         result.push(`f`);
      } else if (str[i] === `E`) {
         result.push(`F`);
      } else if (str[i] === `o`) {
         result.push(`p`);
      } else if (str[i] === `O`) {
         result.push(`P`);
      } else {
         result.push(str[i]);
      }
   }

   return result;
}

function reverseWord(str) {
   let result = str.reverse();

   return result;
}

function setLowerUpperCase(str) {
   let result = [];

   for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
         result.push(str[i].toUpperCase());
      } else if (str[i] === str[i].toUpperCase()) {
         result.push(str[i].toLowerCase());
      }
   }

   // console.log(result)

   return result;
}

function removeSpaces(str) {
   let result = str.join("").split(" ").join("");

   if (str.length <= 5) {
      return `Minimal karakter yang di inputkan adalah 5 karakter`;
   }

   return result;
}

function passwordGenerator(name) {
   let result;

   let cv = changeVocals(name);
   let rw = reverseWord(cv);
   let sluc = setLowerUpperCase(rw);
   let rs = removeSpaces(sluc);

   result = rs;

   return result;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
