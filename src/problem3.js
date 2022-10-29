function problem3(number) {

  let answer = 0;

  //정규표현식
  let regex = /3|6|9/g;

  for (let i = 1; i <= number; i++) {
    answer += (String(i).match(regex) || []).length;
  }

  return answer;
}

module.exports = problem3;
