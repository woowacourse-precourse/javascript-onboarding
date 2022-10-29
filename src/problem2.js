function problem2(cryptogram) {

  let cryptogramArr = cryptogram.split('');

  let i = 0;

  while (i < cryptogramArr.length) {
    cryptogramArr[i] == cryptogramArr[i + 1] ? (cryptogramArr.splice(i, 2), (i = 0)) : (i += 1); //false i 1증가
  }

  return cryptogramArr.join('');
}

module.exports = problem2;
