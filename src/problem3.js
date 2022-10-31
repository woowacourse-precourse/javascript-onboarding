function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    i = i.toString();

    for (let el of i) {
      if (el === "3" || el === "6" || el === "9") {
        answer++;
      }
    }
  }

  return answer;
}

module.exports = problem3;

/**
 * 1) 1 ~ number까지 반복
 * 2) 해당 숫자의 각 자릿수에 대해 3, 6, 9가 있으면 answer++
 */
