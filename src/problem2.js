function problem2(cryptogram) {
  var answer;
  answer = "";
  var answer_array = [];

  //문자열 cryptogram을 배열로 저장한다
  for (let i = 0; i < cryptogram.length; i++) {
    answer_array[i] = cryptogram[i];
  }

  return answer;
}

module.exports = problem2;
