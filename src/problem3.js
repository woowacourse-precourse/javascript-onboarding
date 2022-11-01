function problem3(number) {
  var answer;
  let count = 0;
  for (let i = 1; i <= number; i++) {
    const stringArr = i.toString().split("");
    stringArr.forEach((string) => {
      if (string === "3" || string === "6" || string === "9") {
        count = count + 1;
      }
    });
  }
  answer = count;
  return answer;
}

module.exports = problem3;
