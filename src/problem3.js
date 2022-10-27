function problem3(number) {
  var answer = 0;
  var regex = /3|6|9/g;//정규표현식

  for (let i = 1; i <= number; i++){
    //match를 이용하여 그 배열의 길이만큼 더해줌
    answer += (String(i).match(regex) || []).length;
  }
  return answer;
}

module.exports = problem3;
