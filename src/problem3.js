function problem3(number) {
  var answer = 0;
  let numString = 0;

  for (let i = 1; i <= number; i++) {
    numString = i.toString();
    for (let j = 0; j < numString.length; j++) {
      if (numString.charCodeAt(j) == 51 || numString.charCodeAt(j) == 54 || numString.charCodeAt(j) == 57) {
        answer++;
      }
    }
  }

  return answer;
}

module.exports = problem3;
