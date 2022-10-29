function problem2(cryptogram) {
  var answer;
  answer = "";
  var answer_array = [];

  //문자열 cryptogram을 배열로 저장한다
  for (let i = 0; i < cryptogram.length; i++) {
    answer_array[i] = cryptogram[i];
  }
  //배열 내 앞, 뒤 문자가 중복되었다면 앞, 뒤 문자를 삭제한다
  for (let i = 0; i < answer_array.length; i++) {
    if (answer_array[i] == answer_array[i + 1]) {
      answer_array.splice(i, 2);
      i = 0;
    }
  }

  if (answer_array[0] == answer_array[1]) {
    answer_array.splice(0, 2);
  }

  //배열을 문자열 answer로 변환한다
  for (let i = 0; i < answer_array.length; i++) {
    answer += answer_array[i];
  }

  return answer;
}

module.exports = problem2;
