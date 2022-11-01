function problem3(number) {
  var answer = 0;
  let string;
  const regexp = /[369]/;

  for (let i = 1; i <= number; i++) {
    string = i.toString();
    answer += string.split(regexp).length - 1;
  }
  return answer;
}

module.exports = problem3;
