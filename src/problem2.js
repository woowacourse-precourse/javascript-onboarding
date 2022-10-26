// function problem2(cryptogram) {
//   var answer;
//   return answer;
// }

// module.exports = problem2;

let letter = "browoanoommnaon";

function crypto(letter) {
  letter.toLowerCase();
  const arr = letter.split("");

  arr.map((char, index) => {
    if (char === arr[index + 1]) {
      arr.splice(index, index + 1);
      console.log(arr);
    }
  });
}

crypto(letter);
