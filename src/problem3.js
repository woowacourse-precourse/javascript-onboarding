function problem3(number) {
  let answer = 0;
  let temp;

  for (let i = 1; i < number + 1; i++) {
    temp = [...i.toString()];
    answer += temp.reduce(
      (prev, cur) => prev + (cur === "3" || cur === "6" || cur === "9"),
      0
    );
  }

  return answer;
}

module.exports = problem3;
