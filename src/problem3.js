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
