function SumLetter(letterArray) {
  if (letterArray.length === 0) return "";
  return letterArray.join("");
}

function problem2(cryptogram) {
  const letterArray = [];
  for (let letter of cryptogram) {
    if (letterArray[letterArray.length - 1] === letter) {
      letterArray.pop();
      continue;
    }
    letterArray.push(letter);
  }
  return SumLetter(letterArray);
}

module.exports = problem2;
