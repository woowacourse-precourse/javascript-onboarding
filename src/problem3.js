function problem3(number, answer = 0) {
  const arrayNumber = (number + "").split("");

  arrayNumber.forEach((item) => {
    if (item.includes("3") || item.includes("6") || item.includes("9")) answer++;
  });

  if (number === 0) return answer;

  return problem3(number - 1, answer);
}

module.exports = problem3;
