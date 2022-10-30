function problem3(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    let num = i.toString();
    // 숫자에 3, 6, 9가 있다면 해당 개수를 result에 추가
    for (let j = 0; j < num.length; j++) {
      if (num[j] === "3" || num[j] === "6" || num[j] === "9") {
        result++;
      }
    }
  }
  return result;
}

module.exports = problem3;
