function eliminating(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i - 1, 2);
      break;
    }
  }
  return arr;
}
function problem2(cryptogram) {
  let cryptoArray = cryptogram.split("");
  let arrayLength = cryptoArray.length;
  while (cryptoArray.length > 0) {
    cryptoArray = eliminating(cryptoArray);
    if (arrayLength === cryptoArray.length) break;
    arrayLength = cryptoArray.length;
  }
}

module.exports = problem2;
