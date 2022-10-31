function problem3(number) {
  var answer;
  return answer;
}

function getCurrentCnt(number) {
  const numberList = number.toString().split("");

  return numberList.reduce((sum, curr) => {
    if (["3", "6", "9"].includes(curr)) sum += 1;
    return sum;
  }, 0);
}

module.exports = problem3;
