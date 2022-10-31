function problem2(cryptogram) {
  return;
}

function deduplication(cryptogram) {
  let cryptArr = cryptogram.split("");
  for (let i = cryptArr.length - 1; i >= 0; i--) {
    if (cryptArr[i] === cryptArr[i + 1]) {
      cryptArr[i] = "";
      cryptArr[i + 1] = "";
    } else {
      cryptArr[i];
    }
  }
  return cryptArr.join("");
}

// console.log(problem2("browoanoommnaon"));
console.log(deduplication("browoanoommnaon"));

module.exports = problem2;
