function problem3(number) {
  var answer;
  return answer;
  let cnt = 0;
  for (i = 1; i <= number; i++)
    (i + "").split("").forEach(function (num) {
      if (num % 3 === 0 && num !== "0") cnt += 1;
    });
}

module.exports = problem3;
