function problem4(word) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetUpper = alphabet.toUpperCase();
  const arrUpper = alphabetUpper.split("");
  const alphabetLower = alphabet.toLowerCase();
  const arrLower = alphabetLower.split("");

  const converterUpper = (word) => {
    const uppAlphabet = word.toString().toUpperCase();
    const lowAlphabet = word.toString().toLowerCase();

    if (word === " ") {
      return " ";
    } else if (word === uppAlphabet) {
      const inputIndexUpper = arrUpper.indexOf(word);
      const reverseAlphabetUpper = arrUpper.reverse();
      return reverseAlphabetUpper[inputIndexUpper];
    } else if (word === lowAlphabet) {
      const inputIndexLower = arrLower.indexOf(word);
      const reverseAlphabetLower = arrLower.reverse();
      return reverseAlphabetLower[inputIndexLower];
    }

    var inputArr = word.split("");
    var sum = [];

    for (let i = 0; i < inputArr.length; i++) {
      sum = sum + converterUpper(inputArr[i]);
    }

    return sum;
  };

  var answer = converterUpper(word);
  return answer;
}

module.exports = problem4;
