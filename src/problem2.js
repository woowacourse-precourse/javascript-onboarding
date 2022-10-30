function problem2(cryptogram) {
  var answer;

  let cryptoArr = cryptogram.split('');

  let k = 0;
  while (k == 0) {
  for (let i = 0; i < cryptoArr.length; i++) {
    if (cryptoArr[i] == cryptoArr[i+1]) {
      cryptoArr.splice(i, 2);
    }
  }
  let j = 0;
  for (let i = 0; i < cryptoArr.length; i++) {
    if (cryptoArr[i] == cryptoArr[i+1]) {
      j++;
    }
  }
  if (j == 0) {
    k++;
  }
}

  answer = cryptoArr.join('');

  return answer;
}

module.exports = problem2;
