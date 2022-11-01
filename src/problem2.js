function problem2(cryptogram) {
  var answer;

  //예외사항
  arr = [];
  answer = "";

  //연속되는지 확인
  for (i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] != cryptogram[i + 1] && cryptogram[i] != cryptogram[i - 1]) {
      arr.push(cryptogram[i])
    }
  }

  answer = arr.join('')

// console.log(answer)

  return answer;
}

module.exports = problem2;
