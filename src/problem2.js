function removeDuplicate(cryptogram) {
  var tmp = cryptogram[0];
  var answer = "";

  for (i = 1; i < cryptogram.length; ++i) {
    if (tmp[0] === cryptogram[i]) tmp += cryptogram[i];
    else {
      if (tmp.length === 1) answer += tmp;
      tmp = cryptogram[i];
    }
  }

  if (tmp.length === 1) answer += tmp;

  return answer;
}

function problem2(cryptogram) {
  var answer;

  while (cryptogram !== removeDuplicate(cryptogram)) {
    cryptogram = removeDuplicate(cryptogram);
  }

  var answer = cryptogram;

  return answer;
}

module.exports = problem2;
