/** 문자열에 연속되는 문자열을 찾아 삭제하는 함수 **/
function removeOverlap(cryptogram) {
  cryptogram = [...cryptogram];

  for (var i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) {
      var startIndex = i;
      var overlapLength = 2;
      i++;
      while (cryptogram[i] === cryptogram[i + 1]) {
        overlapLength++;
        i++;
      }
      cryptogram.splice(startIndex, overlapLength);
      i = i - overlapLength;
    }
  }

  cryptogram = cryptogram.join("");

  return cryptogram;
}

function problem2(cryptogram) {
  var answer;
  var newCryptogram = 0;

  newCryptogram = removeOverlap(cryptogram);

  // 문자열에 연속되는 문자열이 존재하지 않을 때 까지 연속 문자열을 삭제하는 기능
  while (cryptogram != newCryptogram) {
    cryptogram = newCryptogram;
    newCryptogram = removeOverlap(cryptogram);
  }

  answer = newCryptogram;
  return answer;
}

module.exports = problem2;
