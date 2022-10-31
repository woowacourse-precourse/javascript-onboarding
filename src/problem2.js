function problem2(cryptogram) {
  let cryptogramArr = cryptogram.split("");
  let i = 0;

  if (cryptogramArr.length === 0) return "";
  
  /*
  for (let i = 0; i < cryptogramArr.length; i++) {
    if (cryptogramArr[i] === cryptogramArr[i + 1]) {
      cryptogramArr.splice(i, 2);
      i = 0;
    }
  }
  */

  // i === cryptogramArr.length => 모든 글자 체크 끝을 의미
  while (i !== cryptogramArr.length) {
    if (cryptogramArr[i] === cryptogramArr[i + 1]) {
      cryptogramArr.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }

  return cryptogramArr.join("");
}

module.exports = problem2;
