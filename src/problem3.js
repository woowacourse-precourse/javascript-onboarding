function problem3(number) {
  var a = number;
  var answer = 0;
  for (let i = 1; i <= a; i++) {
    let a = i.toString().split("");
    for (let j = 0; j < a.length; j++) {
      if (
        a[j].includes(3) === true ||
        a[j].includes(6) === true ||
        a[j].includes(9) === true
      ) {
        answer++;
      }
    }
  }
  return answer;
}

module.exports = problem3;
