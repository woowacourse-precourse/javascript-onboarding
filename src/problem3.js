function problem3(number) {
  var answer = 0;

  for (let i = 1; i < number + 1; i++) {
    const arrStr = [...String(i)];
    const arrInt = arrStr.map((i) => Number(i));

    for (let j = 0; j < arrInt.length; j++) {
      if (arrInt[j] === 3 || arrInt[j] === 6 || arrInt[j] === 9) {
        answer += 1;
      }
    }
  }

  return answer;
}

module.exports = problem3;
