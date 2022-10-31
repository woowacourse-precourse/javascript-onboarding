function problem2(cryptogram) {
  var answer;
  let cryptoAry = cryptogram.split("");
  let count;

  for (let i = 0; i < cryptoAry.length; i++) {
    if (cryptoAry[i] == cryptoAry[i + 1]) {
      count = i + 1;
      while (cryptoAry[count] === cryptoAry[count + 1]) {
        count++;
      }
      cryptoAry.splice(i, count - i + 1);
      i = 0;
    }
    if (cryptoAry.length == 2 && cryptoAry[0] === cryptoAry[1]) {
      cryptoAry = [];
    }
  }
  
  answer = cryptoAry.join("");
  return answer;
}

module.exports = problem2;
