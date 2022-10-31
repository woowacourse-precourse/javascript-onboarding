function problem2(cryptogram) {
  var answer;
  let check = true;
  while (check) {
    check = false;
    for (let i = 0; i < cryptogram.length; i++) {
      if (cryptogram[i] === cryptogram[i + 1]) {
        cryptogram = cryptogram.substr(0, i) + cryptogram.substr(i + 2, cryptogram.length - 1);
        check = true;
      }
    }
  }
  answer = cryptogram;
  return answer;
}
console.log(problem2("browoanoommnaon"));
module.exports = problem2;
