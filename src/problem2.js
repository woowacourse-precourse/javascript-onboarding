function problem2(cryptogram) {
  let answer = "";
  let cryptoStack = [];
  const cryptoArr = cryptogram.split("");

  cryptoArr.forEach((cryptoText) => {
    if (cryptoStack[cryptoStack.length - 1] === cryptoText) cryptoStack.pop();
    else cryptoStack.push(cryptoText);
  });

  answer = cryptoStack.join("");
  return answer;
}

module.exports = problem2;
