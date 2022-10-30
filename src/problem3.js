function problem3(number) {
  var answer = 0;
  let pos = number.toString().indexOf("3");
  while (pos !== -1) {
    answer++;
    pos = number.toString().indexOf("3", pos + 1);
  }
  return answer;
}

module.exports = problem3;
