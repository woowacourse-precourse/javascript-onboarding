function errorHandling(cryptogram) {
  if (cryptogram.length < 1 || cryptogram.length > 1000) return false;
  for (value of cryptogram) {
    if (value < "a" || value > "z") return false;
  }
  return true;
}
function deduplication(cryptogram) {
  let array = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (Array.isArray(array) && array.length === 0) {
      array.push(cryptogram[i]);
    } else if (array[array.length - 1] === cryptogram[i]) {
      array.pop();
    } else array.push(cryptogram[i]);
  }
  return array.join("");
}
function problem2(cryptogram) {
  if (!errorHandling(cryptogram)) return -1;
  var answer = deduplication(cryptogram);
  return answer;
}

module.exports = problem2;
