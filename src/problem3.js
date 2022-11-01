function problem3(number) {
  if (number < 1 || number > 10000 || number % 1 !== 0) {
    return "1 이상 10,000 이하의 자연수여야 합니다.";
  }
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
