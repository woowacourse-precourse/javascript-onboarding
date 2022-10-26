// function problem2(cryptogram) {
//   var answer;
//   return answer;
// }

// module.exports = problem2;

let letter = "browoanoommnaon";

function decipher(letter) {
  letter.toLowerCase();
  const arr = letter.split("");

  const charArray = decrypto(arr);
  const key = charArray.join("");

  return key;
}

function decrypto(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i = -1;
    }
  }

  return arr;
}


