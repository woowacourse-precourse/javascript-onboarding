function deduplication(cryptogram) {
  let array = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (Array.isArray(array) && array.length === 0) {
      array.push(cryptogram[i]);
    } else if (array[array.length - 1] === cryptogram[i]) {
      array.pop();
    } else array.push(cryptogram[i]);
  }
  return array.join();
}
function problem2(cryptogram) {
  var answer = deduplication(cryptogram);
  return answer;
}

module.exports = problem2;
