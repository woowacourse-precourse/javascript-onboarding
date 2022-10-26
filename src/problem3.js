function getClapCount(number) {
  const array369 = [3, 6, 9];
  const digits = `${number}`.split('').map((n) => parseInt(n, 10));

  return digits.reduce((prevClapCount, digit) => {
    if (array369.includes(digit)) {
      return prevClapCount + 1;
    }

    return prevClapCount;
  }, 0);
}

function problem3(number) {
  let answer = 0;
  const regex369 = /[369]{1}/;

  for (let i = 1; i <= number; i++) {
    if (regex369.test(`${i}`)) {
      answer += getClapCount(i);
    }
  }

  return answer;
}

module.exports = problem3;
