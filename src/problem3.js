function problem3(number) {
  var answer = 0;
  let num = number.toString();
  let currentDigit = num.length;
  const countByDigit = [0, 3, 60, 900, 12000];
  for (let i = 0; i < num.length; i++) {
    answer += countByDigit[currentDigit - 1] * num[i];
    if (num[i] == 3 || num[i] == 6 || num[i] == 9) {
      if (i + 1 != num.length) {
        let temp = Number(num.slice(i + 1)) + 1;
        answer += temp;
        answer += (num[i] / 3 - 1) * 10 ** (currentDigit - 1);
      } else {
        answer += num[i] / 3;
      }
    } else {
      answer += parseInt(num[i] / 3) * 10 ** (currentDigit - 1);
    }
    currentDigit--;
  }
  return answer;
}

module.exports = problem3;
