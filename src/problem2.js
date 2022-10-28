function isLower(cryptogram) {
  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] === cryptogram[i].toUpperCase()) return false;
  }
  return true;
}

function isValidCripto(cryptogram) {
  if (typeof cryptogram !== 'string') return false;
  if (cryptogram.length < 1 || cryptogram.length > 1000) return false;
  if (!isLower(cryptogram)) return false;
  return true;
}

function findIndex(cryptoArray) {
  for (let i = 0; i < cryptoArray.length - 1; i++) {
    if (cryptoArray[i] === cryptoArray[i + 1]) return i;
  }
  return -1;
}

function strToArr(cryptogram) {
  const cryptoArray = cryptogram.split('');
  return cryptoArray;
}

function arrToStr(cryptoArray) {
  const returnCriptogram = cryptoArray.join('');
  return returnCriptogram;
}

function solveCripto(cryptoArray) {
  while (true) {
    let findDeleteIndex = findIndex(cryptoArray);
    if (findDeleteIndex === -1) break;
    cryptoArray.splice(findDeleteIndex, 2);
  }
  return arrToStr(cryptoArray);
}

function problem2(cryptogram) {
  if (!isValidCripto(cryptogram)) return cryptogram;
  const cryptoArray = strToArr(cryptogram);
  return solveCripto(cryptoArray);
}

module.exports = problem2;


console.log(problem2("browoanoommnaon"));
console.log(problem2("zyelleyz"));