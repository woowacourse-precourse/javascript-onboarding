function problem3(number) {
  var answer = 0;

  let i = 1;

  while (i <= number) {
    i = i.toString();
    let j = 0;
    while (j < i.length) {
      if (i[j] === "3" || i[j] === "6" || i[j] === "9") {
        answer++;
      } else {
      }
      j++;
    }
    i++;
  }

  return answer;
}

module.exports = problem3;
