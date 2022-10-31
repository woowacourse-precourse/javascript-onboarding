function deleteOverlap(cryptogram) {
  plain = "";
  temp = cryptogram;
  while (true) {
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] !== temp[i + 1] && temp[i] !== temp[i - 1]) {
        plain += temp[i];
      }
    }
    if (temp === plain) {
      break;
    }
    temp = plain;
    plain = "";
  }
  return plain;
}

function problem2(cryptogram) {
  var answer;
  answer = deleteOverlap(cryptogram);
  return answer;
}

module.exports = problem2;
