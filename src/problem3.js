function problem3(number) {
  let answer = 0;

  if (!isValidNumber(number, 1, 10000)) return;

  for (let i = 1; i < number + 1; i++) {
    const num = i.toString().split('');

    num.forEach((n) => {
      if (n.includes(3)) {
        answer++;
      }
      if (n.includes(6)) {
        answer++;
      }
      if (n.includes(9)) {
        answer++;
      }
    });
  }

  return answer;
}

function isValidNumber(num, min, max) {
  if (num < min || num > max) {
    console.error(
      `${min} 이상 ${max.toLocaleString()} 이하의 숫자를 입력해주세요`
    );
    return false;
  }
  return true;
}

module.exports = problem3;
